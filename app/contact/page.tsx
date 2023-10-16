import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import SignOutButton from "../components/SignOutButton";
import AuthButtons from "../components/AuthButtons";
import MessageInput from "../components/MessageInput";
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

type Props = {};

export default async function page({}: Props) {
	const session = await getServerSession(authOptions);
	const res = await fetch(process.env.URL + "/api/messages", {
		method: "GET",
	});
	const messages: Array<Message> = await res.json();

	return (
		<div>
			<div className="border p-4 shadow-lg my-4">
				<h2 className="mb-2">CONTACT ME</h2>

				<div className="p-2 hover:bg-slate-500">
					<a href="mailto:rong.yu9827@gmail.com" target="_blank" className="hover:underline">
						<div className="flex gap-2">
							<AiOutlineMail size={24}></AiOutlineMail>rong.yu9827@gmail.com
						</div>
					</a>
				</div>
				<div className="p-2 hover:bg-slate-500">
					<a href="https://github.com/Rong-YU" target="_blank" className="hover:underline">
						<div className="flex gap-2">
							<AiOutlineGithub size={24}></AiOutlineGithub>Github
						</div>
					</a>
				</div>
				<div className="p-2 hover:bg-slate-500">
					<a
						href="https://www.linkedin.com/in/rong-yu-2b35b619b/"
						target="_blank"
						className="hover:underline"
					>
						<div className="flex gap-2">
							<AiOutlineLinkedin size={24}></AiOutlineLinkedin>Linkedin
						</div>
					</a>
				</div>
			</div>

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
							<div key={message.id} className="flex items-center my-2 p-2">
								<div className="mr-4">
									<img
										width={32}
										height={32}
										src={message.user.image || "app/favicon.ico"}
										alt="user avatar"
									></img>
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
