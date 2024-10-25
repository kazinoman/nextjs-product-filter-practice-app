import { log } from "console";
import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: Request) {
  const headersList = headers();
  const referer = headersList.get("referer");

  return new Response("Hello, Next.js!", {
    status: 200,
    // headers: { referer: referer },
  });
}

export async function POST(request: NextRequest) {
  const res = await request.json();
  return Response.json({ res });
}
