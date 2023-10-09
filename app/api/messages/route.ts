import type { NextApiRequest, NextApiResponse } from "next";
import serverAuth from "@/libs/serverAuth";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {
		const result = await prismadb.message.findMany({
			include: {
				user: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
		return NextResponse.json(result);
	} catch (error) {}
}
