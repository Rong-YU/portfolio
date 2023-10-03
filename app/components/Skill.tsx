"use client";

import { motion } from "framer-motion";
import React from "react";

type Props = {
	name: string;
	numberOfRelatedProject: Number;
};

export default function Skill({ name, numberOfRelatedProject }: Props) {
	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 1.1 }}
			whileFocus={{ scale: 1.1 }}
			className="relative hover:cursor-pointer"
		>
			<div>
				{name} x{numberOfRelatedProject.toString()}
			</div>
		</motion.div>
	);
}
