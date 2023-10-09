"use client";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {};

export default function SignOutButton({}: Props) {
	return (
		<div className="hover:underline cursor-pointer" onClick={() => signOut()}>
			Sign out
		</div>
	);
}
