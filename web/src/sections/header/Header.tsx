'use client'

import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from '@nextui-org/react'
import { routes_entries, routes_values } from '@/config/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import BrandLogo from '@/sections/header/BrandLogo'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'

export default function Header () {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar
			isBordered
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className="bg-foreground"
			maxWidth="2xl"
		>
			<NavbarContent className="sm:hidden text-primary fadein-bot" justify="center">
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
			</NavbarContent>

			<NavbarContent className="sm:hidden pr-3 fadein-bot" justify="center">
				<BrandLogo/>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4 text-secondary fadein-bot" justify="start">
				<BrandLogo/>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4 text-secondary fadein-bot" justify="center">
				{routes_entries.map(([key, options], k) =>
					<NavbarMyItem key={key} className={`fadein-bot fadein-${k}`} options={options}/>
				)}
			</NavbarContent>

			<NavbarContent justify="end">
				<NextLink href="https://github.com/nness13" target="_blank" className="fa-lg text-secondary fadein-bot">
					<FontAwesomeIcon icon={faGithub} size="2xl"/>
				</NextLink>
			</NavbarContent>

			<NavbarMenu className="bg-foreground">
				{routes_entries.map(([key, options]) =>
					<NavbarMyItem key={key} options={options} onClick={() => setIsMenuOpen(false)}/>
				)}
			</NavbarMenu>
		</Navbar>
	)

}
export function NavbarMyItem ({options, ...rest_props}: {options: routes_values} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> ) {
	const pathname = usePathname();
	const [active, setActive] = useState(pathname === options.route)
	useEffect(() => setActive(pathname === options.route), [pathname, options.route])

	return (
		<div {...rest_props}>
			<NavbarItem className={'col-auto transition-all '+rest_props.className} isActive={active}>
				<NextLink href={options.route} className={`font-bold text-base ${active ? "text-secondary" : "text-text_passive"}`}>
					<div>{options.title}</div>
				</NextLink>
				<div className={`w-full h-1.5 ${active ? "bg-primary" : "bg-passive"} rounded-xl ${active ? "" : "hidden"}`}/>
			</NavbarItem>
		</div>
	)
}