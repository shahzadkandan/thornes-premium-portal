import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { env } from "../../../lib/env";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as {
    secret?: string;
    path?: string;
  } | null;

  if (!env.WORDPRESS_REVALIDATE_SECRET || body?.secret !== env.WORDPRESS_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  const path = body.path ?? "/";
  revalidatePath(path);

  return NextResponse.json({ ok: true, path });
}
