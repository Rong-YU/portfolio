import type { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {
		res.json(JSON.stringify({ ha: "yo" }));
	} catch (error) {}
}

export async function POST(req: Request, res: NextApiResponse) {
	try {
		const body = await req.json();
		if (!body.message) {
			throw Error("Empty message");
		}
		const session = await getServerSession(authOptions);
		if (!session) {
			throw Error("Session not exist");
		}
		const existingUser = await prismadb.user.findUnique({
			where: {
				email: session?.user?.email!,
			},
		});
		if (!existingUser) {
			throw Error("User not exist");
		}
		const result = await prismadb.user.update({
			where: {
				id: existingUser.id,
			},
			data: {
				messages: {
					create: {
						content: body.message,
					},
				},
			},
			include: {
				messages: true,
			},
		});

		return NextResponse.json({ message: body.message, success: true });
	} catch (error: any) {
		console.log(error);
		return NextResponse.json({ message: error.message, success: false }, { status: 400 });
	}
}
