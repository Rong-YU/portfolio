"use client";
import { CloseButton, IconButton } from "@chakra-ui/react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { ReactNode, useState } from "react";

type Props = {};

export default function ProjectList({}: Props) {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	console.log(selectedId);

	const items = [
		{ title: "a", subtitle: "bb", id: "1" },
		{ title: "b", subtitle: "bb", id: "2" },
		{ title: "c", subtitle: "bb", id: "3" },
		{ title: "c", subtitle: "bb", id: "4" },
		{ title: "c", subtitle: "bb", id: "5" },
		{ title: "c", subtitle: "bb", id: "6" },
	];

	const item = items.find((item) => item.id === selectedId);
	return (
		<>
			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-4">
				{items.map((item) => (
					<motion.div
						className={`backdrop-blur-sm shadow-xl p-4 border border-black  ${
							selectedId === null ? "hover:cursor-pointer" : "cursor-not-allowed"
						}`}
						layoutId={item.id}
						onClick={selectedId === null ? () => setSelectedId(item.id) : undefined}
					>
						<div className="w-full h-28 bg-slate-400 mb-2">IMAGE</div>
						<h2>Project title</h2>
						<h3>year</h3>
						<p>Java C scrum C++</p>
					</motion.div>
				))}
			</div>

			<AnimatePresence>
				{selectedId && (
					<motion.div
						className="border border-black shadow-lg p-4 backdrop-blur-lg fixed w-full h-full top-0 left-0 md:w-1/3 md:h-3/6 md:left-1/3 md:top-1/4"
						layoutId={selectedId}
					>
						<div className="float-right">
							<CloseButton size="sm" onClick={() => setSelectedId(null)} />
						</div>

						<motion.h5>{item?.subtitle}</motion.h5>
						<motion.h2>{item?.title}</motion.h2>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
