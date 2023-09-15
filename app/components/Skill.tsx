"use client";
import {
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	Portal,
	useColorMode,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

type Props = {
	name: string;
	numberOfRelatedProject: Number;
};

export default function Skill({ name, numberOfRelatedProject }: Props) {
	const { colorMode } = useColorMode();
	const bgColor = colorMode === "light" ? "#ffffff" : "#202023";

	return (
		<Popover>
			<PopoverTrigger>
				<motion.div
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 1.1 }}
					whileFocus={{ scale: 1.1 }}
					className="relative hover:cursor-pointer"
				>
					<div className="w-0.5 h-full absolute  -z-10 bg-pink-300"></div>
					<div className="z-1 ml-1 mb-1 pl-1" style={{ backgroundColor: bgColor }}>
						<div>
							{name} x{numberOfRelatedProject.toString()}
						</div>
					</div>
				</motion.div>
			</PopoverTrigger>
			<Portal>
				<PopoverContent>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverBody>
						<div>
							{name} : {numberOfRelatedProject.toString()}
						</div>
					</PopoverBody>
				</PopoverContent>
			</Portal>
		</Popover>
	);
}
