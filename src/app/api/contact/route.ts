import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (body?.website) return NextResponse.json({ ok: true, message: "Thanks." });
  if (!body?.name || !body?.email || !body?.requirements)
    return NextResponse.json(
      { ok: false, error: "Please complete your name, email and requirements." },
      { status: 400 },
    );
  return NextResponse.json(
    {
      ok: false,
      error:
        "Online email delivery is not configured yet. Please use the email draft or WhatsApp +92-334-0007744.",
      fallbackUrl: "mailto:info@thorneberry.com.pk?subject=Thorneberry%20healthcare%20inquiry",
    },
    { status: 503 },
  );
}
