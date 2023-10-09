"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function MessageInput({}: Props) {
	const route = useRouter();

	const [message, setMessage] = useState("");

	const sendMessage = async () => {
		// if (!message) {
		// 	return;
		// }
		const res = await fetch("api/message", {
			method: "POST",
			body: JSON.stringify({ message: message }),
		});
		if (res.status === 200) {
			route.refresh();
			setMessage("");
		}
	};

	return (
		<div className="flex gap-4 my-2">
			<input
				className="container
                border
                px-4
                appearance-none"
				type="text"
				id="input"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			></input>
			<div className="border p-2 hover:underline hover:opacity-70 cursor-pointer" onClick={sendMessage}>
				ENTER
			</div>
		</div>
	);
}
