"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
type Props = {};

export default function AuthButtons({}: Props) {
	return (
		<div className="flex flex-row items-center justify-center gap-4">
			<div className="border flex flex-col p-4 gap-4">
				<p>Sign in to leave a message!</p>

				<div className="flex flex-row items-center justify-center gap-4">
					<div
						onClick={() => signIn("google", { callbackUrl: "/contact" })}
						className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
					>
						<FcGoogle size={16} />
					</div>
					<div
						onClick={() => signIn("github", { callbackUrl: "/contact" })}
						className="w-8 h-8 border rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
					>
						<FaGithub size={16} />
					</div>
				</div>
			</div>
		</div>
	);
}
