import { NextApiRequest, NextApiResponse } from "next";

import prismadb from "@/libs/prismadb";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const serverAuth = async (req: NextApiRequest, res: NextApiResponse) => {
	const session = await getServerSession(req, res, authOptions);

	if (!session?.user?.email) {
		throw new Error("Not signed in");
	}

	const currentUser = await prismadb.user.findUnique({
		where: {
			email: session.user.email,
		},
	});

	if (!currentUser) {
		throw new Error("Not signed in");
	}

	return { currentUser };
};

export default serverAuth;
