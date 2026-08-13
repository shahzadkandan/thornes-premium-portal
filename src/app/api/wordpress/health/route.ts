import { NextResponse } from "next/server";
import { wordpressHealthCheck } from "../../../../lib/wordpress/client";

export async function GET() {
  const result = await wordpressHealthCheck();

  return NextResponse.json(result, {
    status: result.ok ? 200 : 503,
    headers: { "Cache-Control": "no-store" },
  });
}
