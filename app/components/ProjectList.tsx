"use client";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { ReactNode, useState } from "react";
import { CloseFullscreen } from "@mui/icons-material";
import { CloseOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";

type Props = {
	projects: Array<project>;
};

export default function ProjectList({ projects }: Props) {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const item = projects.find((item) => item.id === selectedId);

	return (
		<>
			<div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
				{projects.map((item) => (
					<motion.div
						key={item.id}
						className={`backdrop-blur-sm shadow-xl p-4 border border-black  ${
							selectedId === null ? "hover:cursor-pointer" : "cursor-not-allowed"
						}`}
						layoutId={item.id}
						onClick={selectedId === null ? () => setSelectedId(item.id) : undefined}
					>
						<h2 className="mb-2">{item.name}</h2>

						{item.imgUrls && (
							<div className="relative w-full h-28 mb-2">
								<Image src={item.imgUrls[0]} alt="thumbnail" fill sizes="max-width: 300px"></Image>
							</div>
						)}
						<h3>{item.date}</h3>
						<div className="flex flex-wrap mt-2 -m-1">
							{item.skill.map((skill) => {
								return (
									<div key={skill} className="m-1 p-1 rounded-sm bg-yellow-200 text-xs text-black">
										{skill}
									</div>
								);
							})}
						</div>
					</motion.div>
				))}
			</div>

			<AnimatePresence>
				{selectedId && (
					<motion.div
						className="z-20 border border-black shadow-lg p-4 backdrop-blur-lg fixed w-full h-full top-0 left-0 right-0 bottom-0 md:w-2/3 md:h-2/3 md:m-auto"
						layoutId={selectedId}
					>
						<div id="header" className="flex justify-between">
							<h1 className="text-3xl">{item?.name}</h1>

							<IconButton onClick={() => setSelectedId(null)} color="inherit">
								<CloseFullscreen className="md:hidden"></CloseFullscreen>
								<CloseOutlined className="hidden md:inline"></CloseOutlined>
							</IconButton>
						</div>

						<motion.h5>{item?.description}</motion.h5>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
