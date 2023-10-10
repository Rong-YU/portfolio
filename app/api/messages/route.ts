import { NextResponse } from "next/server";
export async function GET() {
	try {
		const result = await prismadb.message.findMany({
			include: {
				user: true,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
		return NextResponse.json(result, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({}, { status: 400 });
	}
}
