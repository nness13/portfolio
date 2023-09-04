'use client'

import { Link, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from '@nextui-org/react'
import { routes_entries, routes_values } from '@/config/routes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import BrandLogo from '@/sections/header/BrandLogo'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import NextLink from "next/link"

export default function () {
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
				<Link href="#" target="_blank" className="fa-lg text-secondary" as={NextLink}>
					<FontAwesomeIcon icon={faGithub} size="2xl"/>
				</Link>
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
	useEffect(() => setActive(pathname === options.route), [pathname])


	return (
		<NavbarItem className="col-auto transition-all" isActive={active}>
			<Link href={options.route} className={`font-bold text-base ${active ? "text-secondary" : "text-text_passive"}`} as={NextLink}>
				<div>{options.title}</div>
			</Link>
			<div className={`w-full h-1.5 ${active ? "bg-primary" : "bg-passive"} rounded-xl ${active ? "" : "hidden"}`}/>
		</NavbarItem>
	)
}