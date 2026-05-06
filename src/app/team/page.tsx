"use client";

import * as React from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import TeamHero from "@/components/sections/team/TeamHero";
import TeamFilters, {
  type TeamFilterValues,
} from "@/components/sections/team/TeamFilters";
import TeamGrid from "@/components/sections/team/TeamGrid";
import { team } from "@/lib/data/team";

export default function TeamPage() {
  const [values, setValues] = React.useState<TeamFilterValues>({
    office: "",
    specialty: "",
  });

  const filtered = React.useMemo(() => {
    return team.filter((m) => {
      if (values.office && m.office !== values.office) return false;
      if (values.specialty && !m.specialties.includes(values.specialty))
        return false;
      return true;
    });
  }, [values]);

  return (
    <>
      <SiteHeader />
      <main className="pt-14">
        <TeamHero />
        <section className="bg-white border-b border-[#d2d2d7]">
          <div className="max-w-[1024px] mx-auto px-6 py-6">
            <TeamFilters
              values={values}
              onChange={setValues}
              visibleCount={filtered.length}
              totalCount={team.length}
            />
          </div>
        </section>
        <TeamGrid filtered={filtered} />
      </main>
      <SiteFooter />
    </>
  );
}
