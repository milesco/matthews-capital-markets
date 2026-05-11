import { redirect } from "next/navigation";
import { getLatestMhi } from "@/lib/data/mhi";

// /research/mhi → latest published quarter. The quarter pages do the
// real lifting; this is a stable URL for citations.
export default function MhiOverview() {
  const latest = getLatestMhi();
  redirect(`/research/mhi/${latest.slug}`);
}
