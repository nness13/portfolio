'use client'

import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from '@nextui-org/react'
import { routes_entries, routes_values } from '@/config/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import BrandLogo from '@/sections/header/BrandLogo'
import { useEffect, useState } from 'react'
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
			<NavbarContent className="sm:hidden text-primary" justify="center">
				<NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
			</NavbarContent>

			<NavbarContent className="sm:hidden pr-3" justify="center">
				<BrandLogo/>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4 text-secondary" justify="start">
				<BrandLogo/>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4 text-secondary" justify="center">
				{routes_entries.map(([key, options]) =>
					<NavbarMyItem key={key} options={options}/>
				)}
			</NavbarContent>

			<NavbarContent justify="end">
				<NextLink href="https://github.com/nness13" target="_blank" className="fa-lg text-secondary">
					<FontAwesomeIcon icon={faGithub} size="2xl"/>
				</NextLink>
			</NavbarContent>

			<NavbarMenu className="bg-foreground">
				{routes_entries.map(([key, options]) =>
					<NavbarMyItem key={key} options={options}/>
				)}
			</NavbarMenu>
		</Navbar>
	)

}
export function NavbarMyItem ({options}: {options: routes_values}) {
	const pathname = usePathname();
	const [active, setActive] = useState(pathname === options.route)
	useEffect(() => setActive(pathname === options.route), [pathname, options.route])

	return (
		<NavbarItem className="col-auto transition-all" isActive={active}>
			<NextLink href={options.route} className={`font-bold text-base ${active ? "text-secondary" : "text-text_passive"}`}>
				<div>{options.title}</div>
			</NextLink>
			<div className={`w-full h-1.5 ${active ? "bg-primary" : "bg-passive"} rounded-xl ${active ? "" : "hidden"}`}/>
		</NavbarItem>
	)
}