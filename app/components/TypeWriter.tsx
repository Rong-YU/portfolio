"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

type Props = {};

export default function TypeWriter({}: Props) {
	const [text, count] = useTypewriter({
		words: ["Hello World!", "Open to work!", "I can speak French, English and Chinese!"],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div>
			{text}
			<Cursor cursorColor="#2DD4BF" cursorStyle="_"></Cursor>
		</div>
	);
}
