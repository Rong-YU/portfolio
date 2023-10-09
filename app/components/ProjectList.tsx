"use client";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import React, { ReactNode, useState } from "react";
import { CloseFullscreen } from "@mui/icons-material";
import { CloseOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Pagination, Navigation, Zoom } from "swiper/modules";

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
						className={`backdrop-blur-sm shadow-xl p-4 border  ${
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
							{item.techStack.map((tech) => {
								return (
									<div key={tech} className="m-1 p-1 rounded-sm bg-yellow-200 text-xs text-black">
										{tech}
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
						className="container flex flex-col z-20 border-2 shadow-lg backdrop-blur-lg fixed w-full h-full top-0 left-0 right-0 bottom-0 md:w-2/3 md:h-2/3 md:m-auto overflow-hidden"
						layoutId={selectedId}
					>
						<div id="header" className="border-b-2  p-4 flex justify-between">
							<h1 className="text-3xl">{item?.name}</h1>

							<IconButton onClick={() => setSelectedId(null)} color="inherit">
								<CloseOutlined></CloseOutlined>
							</IconButton>
						</div>
						<div className="p-4  overflow-hidden overflow-y-scroll h-auto scrollbar-hide">
							<motion.div className="flex flex-col p-1 border shadow-lg  my-2">
								<div>
									<span>Date: </span>
									<span className="text-sm">{item?.date}</span>
								</div>
								{item?.company && (
									<div>
										<span>Company: </span>
										<span className="text-sm">{item?.company}</span>
									</div>
								)}
								<div>
									<span>Type: </span>
									<span className="text-sm">{item?.type}</span>
								</div>
							</motion.div>
							{item?.imgUrls && item?.imgUrls.length > 0 && (
								<div className="relative border shadow-lg my-2">
									<div className="absolute text-xs ml-2 z-20 bg-slate-800 text-white px-1 rounded-xs">
										Double tap to zoom
									</div>
									<Swiper
										className="w-full h-72 "
										slidesPerView={1}
										pagination={{
											clickable: true,
										}}
										navigation={true}
										modules={[Pagination, Navigation, Zoom]}
										zoom={true}
									>
										{item?.imgUrls.map((url, index) => {
											return (
												<SwiperSlide key={index} className="h-auto">
													<div className="swiper-zoom-container relative flex h-full items-center justify-center">
														<Image
															className="object-contain"
															src={url}
															alt="swiper img"
															fill
														></Image>
													</div>
												</SwiperSlide>
											);
										})}
									</Swiper>
								</div>
							)}
							<div className="border p-1 shadow-lg my-2">
								<h4>DESCRIPTION</h4>
								<p>{item?.description}</p>
							</div>
							<div className="border p-1 shadow-lg my-2">
								<h4>MY MISSIONS</h4>
								<div className="flex flex-col">
									{item?.missions.map((mission, index) => {
										return <p key={index}>- {mission}</p>;
									})}
								</div>
							</div>
							<div className="border p-1 shadow-lg my-2">
								<h4>TECH STACK</h4>
								<div className="flex flex-wrap -m-1">
									{item?.techStack.map((tech) => {
										return (
											<div
												key={tech}
												className="m-1 p-1 rounded-sm bg-yellow-200 text-xs text-black"
											>
												{tech}
											</div>
										);
									})}
								</div>
							</div>
							<div className="border p-1 shadow-lg my-2">
								<h4>TOOL</h4>
								<div className="flex flex-wrap -m-1">
									{item?.tools.map((tool) => {
										return (
											<div
												key={tool}
												className="m-1 p-1 rounded-sm bg-purple-300 text-xs text-black"
											>
												{tool}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
