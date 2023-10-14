import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const type = new URL(request.url).pathname.split("/")[1]; // 'blog' or 'projects'

  return NextResponse.json({
    views: await kv.get<number>(`${type}-${slug}-views`),
  });
}
