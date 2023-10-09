import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignOutButton from "../components/SignOutButton";
import AuthButtons from "../components/AuthButtons";
import MessageInput from "../components/MessageInput";

type Props = {};

export default async function page({}: Props) {
	const session = await getServerSession(authOptions);
	const res = await fetch(process.env.URL + "/api/messages", {
		method: "GET",
	});
	const messages: Array<Message> = await res.json();

	return (
		<div>
			{!session && (
				<div className="my-4">
					<AuthButtons></AuthButtons>
				</div>
			)}
			{/* <button onClick={test}>sss</button> */}
			{session && (
				<div className="border p-4 shadow-lg mt-4">
					<div className="flex justify-between text-xs">
						<p>Signed in as {session?.user?.name}</p>
						<SignOutButton></SignOutButton>
					</div>
					<MessageInput></MessageInput>
				</div>
			)}
			<div className="border p-4 shadow-lg">
				<h2 className="mb-2">MESSAGES</h2>
				{messages.length > 0 &&
					messages.map((message) => {
						const timeString = new Date(message.createdAt).toLocaleString();
						return (
							<div className="flex items-center my-2 p-2">
								<div className="mr-4">
									<img width={32} height={32} src={message.user.image || "app/favicon.ico"}></img>
								</div>
								<div>
									<div>
										<span>{message.user.name}</span> <span className="text-sm">{timeString}</span>
									</div>
									<p className="text-sm">{message.content}</p>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
