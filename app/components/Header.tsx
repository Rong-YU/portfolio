"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { Button, IconButton, Menu, MenuButton, MenuItem, MenuList, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";

type Props = {};

type LinkItemProps = {
	href: string;
	path: string;
	children: React.ReactNode;
};
const LinkItem = ({ href, path, children }: LinkItemProps) => {
	const active = path === href;
	return (
		<Link className={`p-2 mx-2 hover:underline ${active ? "bg-blue-700 text-white" : ""}`} href={href}>
			{children}
		</Link>
	);
};

export default function Header({}: Props) {
	const pathName = usePathname();
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<motion.div
			initial={{ y: -50 }}
			animate={{ y: 0 }}
			className="flex sticky top-0 backdrop-blur-sm mx-4 mt-2 justify-between"
		>
			<Link className="p-2 pl-0 mx-1" href="/">
				<p className="font-bold">Rong YU</p>
			</Link>
			<div className="hidden md:flex md:flex-row flex-grow justify-end">
				<LinkItem href="/works" path={pathName}>
					<p>Works</p>
				</LinkItem>
				<LinkItem href="/guestbook" path={pathName}>
					<p>Contact</p>
				</LinkItem>
			</div>
			<div className="flex flex-row">
				<IconButton
					aria-label="toggle theme"
					onClick={toggleColorMode}
					icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				></IconButton>
				<div className="ml-2 md:hidden">
					<Menu isLazy id="mobile-menu">
						<MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
						<MenuList>
							<MenuItem as={Link} href="/">
								<span>/</span>
							</MenuItem>
							<MenuItem as={Link} href="/works">
								<span>Works</span>
							</MenuItem>
							<MenuItem as={Link} href="/guestbook">
								<span>Guest book</span>
							</MenuItem>
						</MenuList>
					</Menu>
				</div>
			</div>
		</motion.div>
	);
}
