import type { GlossaryEntry } from "./types";
import { entry as capRate } from "./cap-rate";
import { entry as revpar } from "./revpar";
import { entry as adr } from "./adr";
import { entry as pip } from "./pip";
import { entry as bov } from "./bov";
import { entry as iom } from "./iom";

export type { GlossaryEntry, GlossaryFaq, GlossarySource } from "./types";

export const glossary: GlossaryEntry[] = [
  capRate,
  revpar,
  adr,
  pip,
  bov,
  iom,
];

export function getGlossaryEntry(slug: string): GlossaryEntry | undefined {
  return glossary.find((g) => g.slug === slug);
}
