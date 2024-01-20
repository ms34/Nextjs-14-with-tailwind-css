import { authOptions } from "@/app/lib/authOptions";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(authOptions);
  return NextResponse.json({ name: session?.user?.name ?? "Not Logged In" });
}
