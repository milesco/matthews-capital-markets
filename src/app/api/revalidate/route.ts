import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-revalidate-secret") ?? req.nextUrl.searchParams.get("secret");
  const expected = process.env.REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => ({}))) as {
    tags?: string[];
    paths?: string[];
  };

  const revalidatedTags: string[] = [];
  const revalidatedPaths: string[] = [];

  for (const tag of body.tags ?? []) {
    revalidateTag(tag);
    revalidatedTags.push(tag);
  }

  for (const path of body.paths ?? []) {
    revalidatePath(path);
    revalidatedPaths.push(path);
  }

  return NextResponse.json({
    ok: true,
    revalidated: {
      tags: revalidatedTags,
      paths: revalidatedPaths,
    },
    now: new Date().toISOString(),
  });
}

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  const path = req.nextUrl.searchParams.get("path");
  const tag = req.nextUrl.searchParams.get("tag");
  const expected = process.env.REVALIDATE_SECRET;

  if (!expected || secret !== expected) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  if (!path && !tag) {
    return NextResponse.json({ ok: false, error: "Provide path or tag" }, { status: 400 });
  }

  if (path) revalidatePath(path);
  if (tag) revalidateTag(tag);

  return NextResponse.json({ ok: true, revalidated: { path, tag }, now: new Date().toISOString() });
}
