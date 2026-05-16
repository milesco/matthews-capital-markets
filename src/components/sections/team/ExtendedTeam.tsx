import * as React from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

type Agent = {
  name: string;
  title: string;
  office: string;
  phone?: string;
  email: string;
  photo: string;
  profile: string;
};

const agents: Agent[] = [
  { name: "Mitchell Glasson", title: "First Vice President", office: "Orange County, CA", phone: "+1 (949) 432-4502", email: "mitchell.glasson@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2016/05/Mitchell-Glasson-Web-Use.jpg", profile: "https://www.matthews.com/agents/mitchell-glasson" },
  { name: "Francisco Nacorda", title: "Senior Vice President", office: "Fort Lauderdale, FL", email: "francisco.nacorda@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/02/Francisco-Nacorda-Web-Use.jpg", profile: "https://www.matthews.com/agents/francisco-nacorda" },
  { name: "Dustin Robinett", title: "Vice President", office: "Kansas City, MO", phone: "+1 (303) 268-8243", email: "dustin.robinett@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Dustin-Robinett-Web-Use-1.jpg", profile: "https://www.matthews.com/agents/dustin-robinett" },
  { name: "Mabelle Perez", title: "Vice President", office: "Fort Lauderdale, FL", phone: "+1 (786) 206-9739", email: "mabelle.perez@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Mabelle-Perez-Web-Use.jpg", profile: "https://www.matthews.com/agents/mabelle-perez" },
  { name: "David Loving", title: "Associate Market Leader", office: "Tampa, FL", phone: "+1 (813) 358-3599", email: "david.loving@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/David-Loving-Web-Use-1.jpg", profile: "https://www.matthews.com/agents/david-loving" },
  { name: "Andrew Senatore", title: "Senior Associate", office: "Phoenix, AZ", phone: "+1 (602) 946-4901", email: "andrew.senatore@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Andrew-Senatore-Web-Use.jpg", profile: "https://www.matthews.com/agents/andrew-senatore" },
  { name: "Hunter Davis", title: "Senior Associate", office: "Phoenix, AZ", phone: "+1 (602) 946-4371", email: "hunter.davis@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Hunter-Davis-Web-Use-1-1.jpg", profile: "https://www.matthews.com/agents/hunter-davis" },
  { name: "Alfonso Garcia", title: "Associate", office: "Dallas, TX", phone: "+1 (214) 432-4719", email: "alfonso.garcia@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Alfonso-Garcia-Web-Use.jpg", profile: "https://www.matthews.com/agents/alfonso-garcia" },
  { name: "Ash Singh", title: "Associate", office: "Encino, CA", phone: "+1 (818) 330-4508", email: "ash.singh@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/04/Ash-Singh-Web-Use.jpg", profile: "https://www.matthews.com/agents/ash-singh" },
  { name: "Chris Beavers", title: "Associate", office: "Nashville, TN", phone: "+1 (629) 262-0382", email: "chris.beavers@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Chris-Beavers-Web-Use.png", profile: "https://www.matthews.com/agents/chris-beavers" },
  { name: "Dominic Henderson", title: "Associate", office: "Orange County, CA", phone: "+1 (310) 561-8254", email: "dominic.henderson@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Dominic-Henderson-Web-Use.jpg", profile: "https://www.matthews.com/agents/dominic-henderson" },
  { name: "Elias Zakas", title: "Associate", office: "Phoenix, AZ", phone: "+1 (602) 715-2609", email: "elias.zakas@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Elias-Zakas-Web-Use.jpg", profile: "https://www.matthews.com/agents/elias-zakas" },
  { name: "Jake Senatore", title: "Associate", office: "Phoenix, AZ", phone: "+1 (602) 922-3471", email: "jake.senatore@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Jake-Senatore-Web-Use.jpg", profile: "https://www.matthews.com/agents/jake-senatore" },
  { name: "Julio Leyva", title: "Associate", office: "Fort Lauderdale, FL", phone: "+1 (754) 288-1327", email: "julio.leyva@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/03/Julio-Leyva-Web-Use.jpg", profile: "https://www.matthews.com/agents/julio-leyva" },
  { name: "Luke Whittaker", title: "Associate", office: "Orange County, CA", phone: "+1 (317) 493-0055", email: "luke.whittaker@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Luke-Whittaker-Web-Use-2.jpg", profile: "https://www.matthews.com/agents/luke-whittaker" },
  { name: "Ritik Patel", title: "Associate", office: "Cleveland, OH", phone: "+1 (216) 367-7832", email: "ritik.patel@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/09/Ritik-Patel-Web-Use.jpg", profile: "https://www.matthews.com/agents/ritik-patel" },
  { name: "Ryan Kawai Sanchez", title: "Associate", office: "Orange County, CA", phone: "+1 (949) 287-5854", email: "ryan.sanchez@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/07/Ryan-Sanchez-Use-1.jpg", profile: "https://www.matthews.com/agents/ryan-kawai-sanchez" },
  { name: "Youssef Alkalabani", title: "Associate", office: "Nashville, TN", phone: "+1 (615) 234-5749", email: "youssef.alkalabani@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2025/09/Youssef-Alkalabani-Web-Use.jpg", profile: "https://www.matthews.com/agents/youssef-alkalabani" },
  { name: "Jordan Beletz", title: "Sales Analyst", office: "Phoenix, AZ", phone: "+1 (520) 308-6079", email: "jordan.beletz@matthews.com", photo: "https://cms.matthews.com/wp-content/uploads/2026/01/Jordan-Beletz-Web-Use.jpg", profile: "https://www.matthews.com/agents/jordan-beletz" },
];

export function ExtendedTeam() {
  return (
    <section className="bg-white border-t border-[#d2d2d7] pt-16 lg:pt-20 pb-24 lg:pb-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <Reveal>
          <div className="flex items-center gap-6 mb-12">
            <p
              aria-hidden="true"
              className="text-[13px] font-medium uppercase tracking-[0.32em] text-[#1d1d1f] whitespace-nowrap"
            >
              Matthews Hospitality, Nationwide
            </p>
            <div aria-hidden="true" className="h-px flex-1 bg-[#1d1d1f]/15" />
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {agents.map((a, i) => (
            <Reveal key={a.email} delay={i * 0.03}>
              <article className="group">
                <a
                  href={a.profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View profile for ${a.name} on matthews.com`}
                  className="block focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a3a6b]"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f7]">
                    <Image
                      src={a.photo}
                      alt={`${a.name}, ${a.title}`}
                      fill
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 280px"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                </a>

                <div className="mt-4">
                  <h3 className="text-[12.5px] font-semibold uppercase tracking-[0.18em] text-[#1d1d1f]">
                    <a
                      href={a.profile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-baseline gap-1 hover:text-[#1a3a6b] transition-colors duration-200"
                    >
                      {a.name}
                      <span aria-hidden="true" className="text-[#86868b]">
                        ›
                      </span>
                    </a>
                  </h3>
                  <p className="mt-1.5 text-[11px] uppercase tracking-[0.18em] text-[#6e6e73]">
                    {a.title}
                    <span aria-hidden="true" className="mx-1.5 text-[#a1a1a6]">
                      ·
                    </span>
                    {a.office}
                  </p>
                  <div className="mt-3 flex flex-col gap-1 text-[13px] tracking-[-0.014em]">
                    <a
                      href={`mailto:${a.email}`}
                      className="text-[#1a3a6b] hover:underline underline-offset-[3px] decoration-[#1a3a6b]/40 break-all"
                    >
                      {a.email}
                    </a>
                    {a.phone && (
                      <a
                        href={`tel:${a.phone.replace(/[^0-9+]/g, "")}`}
                        className="text-[#424245] hover:text-[#1d1d1f]"
                      >
                        {a.phone}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExtendedTeam;
