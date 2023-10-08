"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { MenuOpenOutlined } from "@mui/icons-material";

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

const NavMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<IconButton aria-controls="nav-menu" aria-haspopup="true" onClick={handleClick} color="inherit">
				<MenuOpenOutlined></MenuOpenOutlined>
			</IconButton>
			<Menu id="nav-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<Link href="/">
					<MenuItem onClick={handleClose}>
						<p>/</p>
					</MenuItem>
				</Link>
				<Link href="/works">
					<MenuItem onClick={handleClose}>
						<p>Works</p>
					</MenuItem>
				</Link>
				<Link href="/guestbook">
					<MenuItem onClick={handleClose}>
						<p>Guest</p>
					</MenuItem>
				</Link>
			</Menu>
		</div>
	);
};

export default function Header({}: Props) {
	const pathName = usePathname();
	const { theme, setTheme } = useTheme();
	return (
		<motion.div
			initial={{ y: -50 }}
			animate={{ y: 0 }}
			className="flex sticky z-10 top-0 backdrop-blur-sm mx-4 mt-2 justify-between"
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
				<motion.div
					whileTap={{ rotate: 360, scale: 1.2 }}
					onClick={setTheme}
					className={`rounded-full py-2 px-3 hover:cursor-pointer ${
						theme === "light" ? "bg-blue-200" : "bg-slate-500"
					}`}
				>
					{theme === "light" ? "🌝" : "🌑"}
				</motion.div>
				<div className="ml-2 md:hidden">
					<NavMenu></NavMenu>
					<div></div>
				</div>
			</div>
		</motion.div>
	);
}
