import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (body?.website) return NextResponse.json({ ok: true, message: "Thanks." });
  if (!body?.name || !body?.company || !body?.email || !body?.country || !body?.requirements)
    return NextResponse.json(
      { ok: false, error: "Please complete the required RFQ fields." },
      { status: 400 },
    );
  return NextResponse.json(
    {
      ok: false,
      error:
        "Online email delivery is not configured yet. Please email info@thorneberry.com.pk or use WhatsApp +92-334-0007744.",
    },
    { status: 503 },
  );
}
