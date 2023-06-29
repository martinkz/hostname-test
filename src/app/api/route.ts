import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
	console.log(request.nextUrl);

	return new Response(request.nextUrl.toString(), { status: 200 });
}
