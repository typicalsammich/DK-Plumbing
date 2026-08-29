import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import {
  ArrowLink,
  BeforeAfterComparison,
  ContactDetails,
  ContactForm,
  FAQSection,
  LicenseProof,
  ProjectGallery,
  ProofList,
  ReviewFeature,
  ServiceCapabilityShowcase,
  SiteShell,
} from "@/components/site-ui";
import {
  allSlugs,
  business,
  cities,
  corePages,
  serviceBySlug,
  serviceNavGroups,
  type Service,
} from "@/lib/site-data";

type PageProps = { params: Promise<{ slug: string }> };

const coreMetadata: Record<string, { title: string; description: string }> = {
  "about-us": {
    title: "Colorado Springs Master Plumber",
    description: "Meet DK Plumbing & Heating LLC, a licensed and insured Colorado Springs plumbing contractor serving homes, businesses and construction projects across the Front Range.",
  },
  services: {
    title: "Colorado Springs & Denver Plumbing Services",
    description: "Explore plumbing repair, sewer cameras, hydro jetting, water lines, gas piping, boilers, radiant hydronics, water heaters, repiping, commercial work and construction.",
  },
  projects: {
    title: "Colorado Plumbing, Boiler & Hydronic Projects",
    description: "See real plumbing, hydronic heating, water heater, fixture, drain and rough-in work completed by DK Plumbing & Heating LLC.",
  },
  "dedicated-contractor": {
    title: "Colorado Commercial & Construction Plumber",
    description: "Licensed plumbing manpower and project support for Colorado general contractors, builders, remodelers and commercial construction teams.",
  },
  "service-areas": {
    title: "Colorado Springs & Denver Plumbing Service Areas",
    description: "Local plumbing, boilers, radiant hydronic heat and water-heater pages for Colorado Springs, Denver, Aurora, Highlands Ranch, Centennial and Englewood.",
  },
  "contact-us": {
    title: "Contact a Colorado Springs Plumber",
    description: "Call 720-527-4557 or request an estimate from DK Plumbing & Heating for residential, commercial, boiler, hydronic, water heater or construction plumbing.",
  },
};

function parseLocationPage(slug: string) {
  const city = cities.find((candidate) => slug.endsWith(`-${candidate.slug}`));
  if (!city) return null;
  if (slug.startsWith("plumbing-in-")) return { city, kind: "plumbing" as const };
  if (slug.startsWith("heating-solutions-in-")) return { city, kind: "heating" as const };
  if (slug.startsWith("hot-water-heater-replacement-in-")) return { city, kind: "water-heater" as const };
  return null;
}

const locationIntentDetails = {
  plumbing: [
    { title: "Emergency leak and burst-pipe repair", detail: "Active leaks, frozen or split piping, urgent shutoffs and water-damage control." },
    { title: "Sewer camera inspection and hydro jetting", detail: "Slow mains, repeat backups, root intrusion, sewer odors, cleanouts and drain-line restrictions." },
    { title: "Water pressure and PRV diagnostics", detail: "Low pressure, high pressure, water hammer, failing pressure regulators and undersized supply concerns." },
    { title: "Underground water-line repair", detail: "Main service leaks, curb-stop coordination, shutoff replacement, reroutes and water-service upgrades." },
    { title: "Copper, PEX and DWV repiping", detail: "Partial or whole-property supply, drain, waste and vent replacement for remodels and aging systems." },
    { title: "Commercial and construction plumbing", detail: "Tenant finishes, restaurants, rough-in, top-out, trim-out, gas piping, backflow and inspection support." },
  ],
  heating: [
    { title: "Boiler repair and replacement", detail: "No-heat calls, inconsistent temperatures, equipment replacement and complete hydronic system support." },
    { title: "Radiant floor heating repair", detail: "Cold zones, uneven heat, circulation problems and water-based radiant distribution concerns." },
    { title: "Circulator pumps and zone controls", detail: "Pump replacement, zone valves, controls and flow problems affecting individual heating areas." },
    { title: "Expansion tanks and air separators", detail: "Pressure control, trapped air, expansion capacity and components that protect stable operation." },
    { title: "Hydronic purging and pressure balancing", detail: "System purging, air removal, glycol treatment and balancing for reliable heat distribution." },
    { title: "Commercial hydronic systems", detail: "Boilers, storage, multi-zone piping and serviceable mechanical-room layouts for occupied properties." },
  ],
  "water-heater": [
    { title: "Tank and tankless replacement", detail: "Capacity and equipment selection based on hot-water demand, utilities and the existing installation." },
    { title: "No-hot-water diagnostics", detail: "Heating, control, burner and connected-system checks before replacement is recommended." },
    { title: "Expansion tanks and drain pans", detail: "Thermal expansion control and safe drainage details included where the installation requires them." },
    { title: "Venting and gas-line rework", detail: "Combustion-air, venting, gas drip legs, shutoffs and connections completed as one coordinated scope." },
    { title: "T&P discharge and full-port valves", detail: "Required safety discharge piping, service valves and reliable water connections around the new unit." },
    { title: "Permits, inspection and haul-away", detail: "Permit coordination, inspection scheduling and removal of the old equipment where applicable." },
  ],
} as const;

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug[slug];
  const location = parseLocationPage(slug);
  let title = "DK Plumbing & Heating LLC";
  let description = "Licensed plumbing, boilers and hydronic heat across Colorado's Front Range.";

  if (service) {
    title = `${service.shortTitle} Colorado Springs & Denver, CO`;
    description = `${service.intro} Licensed ${service.items.slice(0, 3).join(", ").toLowerCase()} across Colorado Springs, Denver Metro and the Front Range.`;
  } else if (location) {
    const serviceName =
      location.kind === "plumbing"
        ? "Plumbing"
        : location.kind === "heating"
          ? "Boiler & Hydronic Heating"
          : "Water Heater Replacement";
    title = location.kind === "plumbing"
      ? `Plumber in ${location.city.name}, CO`
      : location.kind === "heating"
        ? `Boiler & Radiant Heat in ${location.city.name}, CO`
        : `Water Heater Replacement in ${location.city.name}, CO`;
    description = `Licensed ${serviceName.toLowerCase()} for ${location.city.name} homes, businesses and construction projects. Master Plumber ${business.license}. Call ${business.phone}.`;
  } else if (coreMetadata[slug]) {
    title = coreMetadata[slug].title;
    description = coreMetadata[slug].description;
  }

  return {
    title,
    description,
    alternates: { canonical: `/${slug}/` },
    openGraph: { title, description, url: `https://dkplumbingandheatingco.com/${slug}/` },
    twitter: { title, description },
    keywords: location
      ? locationIntentDetails[location.kind].map((item) => `${item.title} ${location.city.name}`)
      : service
        ? service.items.map((item) => `${item} Colorado`)
        : undefined,
    robots: { index: true, follow: true },
  };
}

function Breadcrumbs({ current, parent }: { current: string; parent?: { label: string; href: string } }) {
  return (
    <div className="breadcrumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link><span>/</span>
      {parent ? <><Link href={parent.href}>{parent.label}</Link><span>/</span></> : null}
      <span>{current}</span>
    </div>
  );
}

function BreadcrumbSchema({ slug, title, parent }: { slug: string; title: string; parent?: { title: string; path: string } }) {
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: "https://dkplumbingandheatingco.com/" }];
  if (parent) items.push({ "@type": "ListItem", position: 2, name: parent.title, item: `https://dkplumbingandheatingco.com${parent.path}` });
  items.push({ "@type": "ListItem", position: items.length + 1, name: title, item: `https://dkplumbingandheatingco.com/${slug}/` });
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items }) }} />;
}

function FAQSchema({ items }: { items: Array<{ question: string; answer: string }> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  }) }} />;
}

function InteriorHero({
  title,
  intro,
  image,
  imageAlt,
  eyebrow,
  parent,
}: {
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  eyebrow: string;
  parent?: { label: string; href: string };
}) {
  return (
    <section className="interior-hero">
      <img src={image} alt={imageAlt} />
      <div className="interior-hero-content wrap">
        <Breadcrumbs current={title} parent={parent} />
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <div className="interior-hero-actions">
          <ArrowLink href="/contact-us">Get an Estimate</ArrowLink>
          <a className="hero-call" href={business.phoneHref}><Phone size={18} /> Call {business.phone}</a>
        </div>
      </div>
    </section>
  );
}

function RelatedServices({ slugs }: { slugs: string[] }) {
  const names: Record<string, string> = { "dedicated-contractor": "Contractor Support" };
  return (
    <div className="related-services">
      {slugs.map((slug, index) => (
        <Link href={`/${slug}`} key={slug}>
          <small>Related 0{index + 1}</small>
          <strong>{serviceBySlug[slug]?.shortTitle || names[slug] || slug}<ArrowRight /></strong>
        </Link>
      ))}
    </div>
  );
}

function ServicePage({ service }: { service: Service }) {
  const serviceFaqs = [
    {
      question: `Does DK provide ${service.shortTitle.toLowerCase()} for both homes and businesses?`,
      answer: `Yes. DK works on residential and commercial plumbing systems. The exact scope, access, approvals and scheduling depend on the property and the work required.`,
    },
    {
      question: "Will the work be completed to code?",
      answer: `DK is led by a licensed Master Plumber and plans installation around applicable plumbing, gas, safety, permit and inspection requirements. Master Plumber license ${business.license}.`,
    },
    {
      question: "How do I get an estimate?",
      answer: `Call ${business.phone} or send an estimate request with the property location, service needed and a short description of the issue. Photos can be shared during the follow-up when helpful.`,
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.items,
    provider: { "@id": "https://dkplumbingandheatingco.com/#business" },
    areaServed: ["Denver Metro", "Colorado Springs", "Colorado Front Range"],
    url: `https://dkplumbingandheatingco.com/${service.slug}/`,
  };

  return (
    <>
      <InteriorHero title={service.title} intro={service.intro} image={service.image} imageAlt={service.imageAlt} eyebrow="Licensed Plumbing Service" parent={{ label: "Services", href: "/services" }} />
      <section className="section section--dark service-intro-section">
        <div className="wrap service-overview-grid">
          <div className="service-overview-heading">
            <p className="eyebrow"><span /> The Work</p>
            <h2>Experienced work.<br />Clearly scoped.</h2>
          </div>
          <div className="service-overview-copy">
            <p>{service.description}</p>
            <div className="service-trust-rail">
              <LicenseProof />
              <div><small>Built for</small><strong>Homes · Businesses · Construction</strong></div>
              <div><small>Coverage</small><strong>Denver Metro · Colorado Springs</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-capability-section">
        <div className="wrap">
          <div className="section-heading section-heading--row">
            <div><p className="eyebrow"><span /> Service Includes</p><h2>Explore the work inside the scope.</h2></div>
            <p>Select a capability to see how DK approaches it. The exact materials and method follow the property, system condition and code requirements.</p>
          </div>
          <ServiceCapabilityShowcase service={service} />
        </div>
      </section>

      {service.slug === "hot-water-heater-replacement" ? (
        <section className="turnkey-band">
          <div className="wrap turnkey-grid">
            <div>
              <p className="eyebrow eyebrow--light"><span /> Complete Replacement</p>
              <h2>The required installation details belong in the scope.</h2>
            </div>
            <div>
              <p>DK&apos;s current water-heater offering is structured as a complete installation, including required code components, permit and inspection coordination where applicable, and removal of the old unit.</p>
              <p>Ask about current equipment options, pricing and active replacement offers for your property.</p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section">
        <div className="wrap">
          <div className="section-heading section-heading--row">
            <div><p className="eyebrow"><span /> Connected Systems</p><h2>Related DK services.</h2></div>
            <p>Plumbing problems often cross more than one part of the system. These pages cover the connected work.</p>
          </div>
          <RelatedServices slugs={service.related} />
        </div>
      </section>

      <section className="section section--dark">
        <div className="wrap faq-grid">
          <div className="faq-intro">
            <p className="eyebrow"><span /> Before You Book</p>
            <h2>Questions about {service.shortTitle.toLowerCase()}.</h2>
            <p>Call for an urgent issue or send the details for planned work.</p>
            <a href={business.phoneHref}>{business.phone} <ArrowRight size={17} /></a>
          </div>
          <FAQSection items={serviceFaqs} />
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FAQSchema items={serviceFaqs} />
      <BreadcrumbSchema slug={service.slug} title={service.title} parent={{ title: "Services", path: "/services/" }} />
    </>
  );
}

function ServicesIndex() {
  return (
    <>
      <InteriorHero title="Plumbing & Heating Services" intro="A full service structure for repairs, equipment, construction, commercial work and the water-based systems that keep Colorado properties operating." image="/images/hydronic-mechanical-room.webp" imageAlt="DK Plumbing and Heating mechanical room work" eyebrow="Complete Service Directory" />
      <section className="section section--dark">
        <div className="wrap service-directory">
          <div className="content-split-copy">
            <p className="eyebrow"><span /> Service Coverage</p>
            <h2>Find the right part of the system fast.</h2>
            <p>DK&apos;s service architecture stays deep because each scope deserves clear information and a direct path to related work.</p>
            <ArrowLink href="/contact-us">Describe Your Project</ArrowLink>
          </div>
          <div className="service-directory-groups">
            {serviceNavGroups.map((group) => (
              <div className="directory-group" key={group.label}>
                <span>{group.label}</span>
                <div>
                  {group.slugs.map((slug) => (
                    <Link href={`/${slug}`} key={slug}>{serviceBySlug[slug].title}<ArrowRight /></Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="why-dk">
        <div className="wrap why-dk-grid">
          <div><p className="eyebrow eyebrow--light"><span /> One Licensed Team</p><h2>Service work, commercial projects and construction support.</h2></div>
          <div className="why-dk-license"><small>Master Plumber</small><strong>{business.license}</strong><span>Licensed and insured</span></div>
          <div className="why-dk-points">
            <div><span>01</span><strong>Residential</strong><p>Repairs, fixtures, piping, water heaters, boilers and maintenance.</p></div>
            <div><span>02</span><strong>Commercial</strong><p>Facilities, tenant improvements, equipment and code compliance.</p></div>
            <div><span>03</span><strong>Construction</strong><p>Underground, rough-in, top-out, trim and inspection support.</p></div>
            <div><span>04</span><strong>Hydronics</strong><p>Boilers, radiant heat, circulation, controls and system service.</p></div>
          </div>
        </div>
      </section>
      <BreadcrumbSchema slug="services" title="Services" />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <InteriorHero title="A plumbing company built for the full scope." intro="DK supports homeowners, commercial facilities, builders and remodelers with licensed plumbing and hydronic expertise across Colorado's Front Range." image="/images/rough-in-plumbing.webp" imageAlt="DK Plumbing and Heating residential rough-in work" eyebrow="About DK Plumbing & Heating" />
      <section className="section section--dark">
        <div className="wrap content-split">
          <div className="content-split-copy">
            <p className="eyebrow"><span /> The Company</p>
            <h2>Practical experience across service and construction.</h2>
          </div>
          <div className="large-copy">
            <p>DK Plumbing & Heating LLC works across residential plumbing, commercial facilities, remodels and new construction. That range matters when a repair touches an older system, a project needs to move through inspection, or several trades must coordinate in the same space.</p>
            <p>The company&apos;s heating work is centered on water heaters, boilers, radiant heat and hydronic systems. DK is not presented as a general furnace or air-conditioning company.</p>
            <ProofList items={["Colorado Master Plumber " + business.license, "Licensed and insured", "Denver Metro and Colorado Springs coverage", "Residential and commercial plumbing", "New construction and remodel support", "Boiler and hydronic specialization"]} />
          </div>
        </div>
      </section>
      <section className="section about-work-section">
        <div className="wrap about-work-grid">
          <img src="/images/hydronic-mechanical-room.webp" alt="DK hydronic boiler and zone piping" loading="lazy" />
          <div>
            <p className="eyebrow"><span /> What Customers Notice</p>
            <h2>Communication and attention to the details.</h2>
            <p>DK&apos;s current reviews repeatedly mention prompt service, clean work areas, professional communication and the willingness to stay with a difficult problem until the plumbing is safe and operating.</p>
            <ArrowLink href="/projects" variant="outline">See Real DK Work</ArrowLink>
          </div>
        </div>
      </section>
      <section className="section section--dark"><div className="wrap"><ReviewFeature /></div></section>
      <BreadcrumbSchema slug="about-us" title="About DK Plumbing & Heating" />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <InteriorHero title="Our Work" intro="Real DK plumbing, water-heating, hydronic, drain and rough-in photography. No logo tiles and no generated tradespeople." image="/images/dual-tankless-installation.webp" imageAlt="Dual Rinnai tankless installation by DK Plumbing and Heating" eyebrow="Project Portfolio" />
      <section className="section section--dark">
        <div className="wrap">
          <div className="section-heading section-heading--row">
            <div><p className="eyebrow"><span /> Recent Projects</p><h2>Work completed in the field.</h2></div>
            <p>Open any project to see the full image and a short description of the scope.</p>
          </div>
          <ProjectGallery />
        </div>
      </section>
      <section className="section project-comparison-section"><div className="wrap"><BeforeAfterComparison /></div></section>
      <section className="emergency-band"><div className="wrap"><div><p>Planning a repair or project?</p><h2>Show DK what you need built or fixed.</h2></div><a href={business.phoneHref}><Phone /><span><small>Call DK Plumbing</small><strong>{business.phone}</strong></span></a></div></section>
      <BreadcrumbSchema slug="projects" title="Our Work" />
    </>
  );
}

function ContractorPage() {
  const phases = ["Underground and site piping", "New-construction rough-in", "Top-out plumbing", "Trim and fixture installation", "Gas piping and appliance connections", "Testing, code corrections and inspection support"];
  return (
    <>
      <InteriorHero title="Plumbing support for contractors and builders." intro="Dependable licensed manpower for residential and commercial projects, from underground work through trim and final inspection." image="/images/rough-in-plumbing.webp" imageAlt="Plumbing rough-in for an active construction project" eyebrow="Dedicated Contractor Support" />
      <section className="section section--dark">
        <div className="wrap content-split">
          <div className="content-split-copy">
            <p className="eyebrow"><span /> Built for the Schedule</p>
            <h2>A plumbing partner who understands the job site.</h2>
            <p>DK works with general contractors, builders and remodelers who need dependable plumbing support without communication gaps. The team coordinates with other trades, tracks inspection requirements and keeps the plumbing scope moving through each phase.</p>
            <LicenseProof />
          </div>
          <div className="service-detail-list">
            {phases.map((phase, index) => <div key={phase}><span>{String(index + 1).padStart(2, "0")}</span><strong>{phase}</strong></div>)}
          </div>
        </div>
      </section>
      <section className="why-dk">
        <div className="wrap why-dk-grid">
          <div><p className="eyebrow eyebrow--light"><span /> Contractor Confidence</p><h2>Code-compliant execution without the hand-holding.</h2></div>
          <div className="why-dk-license"><small>Master Plumber</small><strong>{business.license}</strong><span>Licensed and insured</span></div>
          <div className="why-dk-points">
            <div><span>01</span><strong>Coordination</strong><p>Work planned around other trades, site access and construction sequencing.</p></div>
            <div><span>02</span><strong>Inspection</strong><p>Installations prepared with applicable code and approval requirements in mind.</p></div>
            <div><span>03</span><strong>Communication</strong><p>Direct updates when field conditions affect scope, timing or material needs.</p></div>
            <div><span>04</span><strong>Finish</strong><p>Rough-in through trim with testing and cleanup before handoff.</p></div>
          </div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="wrap content-split contractor-contact">
          <div><p className="eyebrow"><span /> Active Project</p><h2>Need licensed plumbing support?</h2><p>Send the project type, location, phase, schedule and the plumbing scope DK needs to cover.</p><ContactDetails /></div>
          <ContactForm compact />
        </div>
      </section>
      <BreadcrumbSchema slug="dedicated-contractor" title="Dedicated Contractor Support" />
    </>
  );
}

function ServiceAreasPage() {
  return (
    <>
      <InteriorHero title="Colorado Springs & Denver Metro Plumbing Service Areas" intro="Licensed plumbing, boilers, hydronic heat, water heaters, drains, gas lines and construction support across six current Front Range target cities." image="/images/drain-line-replacement.webp" imageAlt="Plumbing work serving Colorado Front Range properties" eyebrow="Local Plumbing Coverage" />
      <section className="location-trust-band">
        <div className="wrap">
          <div><small>Primary base</small><strong>Colorado Springs</strong></div>
          <div><small>Denver Metro</small><strong>Denver · Aurora · South Metro</strong></div>
          <div><small>Specialty</small><strong>Boilers · Hydronics · Construction</strong></div>
          <div><small>Credential</small><strong>Master Plumber {business.license}</strong></div>
        </div>
      </section>
      <section className="section section--dark">
        <div className="wrap">
          <div className="section-heading section-heading--row"><div><p className="eyebrow"><span /> Local Pages</p><h2>Service information built around each target city.</h2></div><p>Every city page covers its property profile, high-intent plumbing searches, boilers and radiant heat, water-heater installation details and commercial capability.</p></div>
          <div className="city-directory">
            {cities.map((city, index) => (
              <section key={city.slug}>
                <div className="city-name"><span>{String(index + 1).padStart(2, "0")}</span><div><small>{city.lead}</small><h3>{city.name}</h3></div></div>
                <p>{city.propertyProfile}</p>
                <p>{city.context}</p>
                <div>
                  <Link href={`/plumbing-in-${city.slug}`}>Plumbing <ArrowRight /></Link>
                  <Link href={`/heating-solutions-in-${city.slug}`}>Boilers & Hydronics <ArrowRight /></Link>
                  <Link href={`/hot-water-heater-replacement-in-${city.slug}`}>Water Heaters <ArrowRight /></Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <BreadcrumbSchema slug="service-areas" title="Service Areas" />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <InteriorHero title="Tell DK what you need." intro="Request an estimate for planned work or call directly for an active plumbing problem." image="/images/sink-drain-work.webp" imageAlt="Completed DK sink and drain plumbing work" eyebrow="Contact DK Plumbing & Heating" />
      <section className="section section--dark">
        <div className="wrap content-split contact-page-grid">
          <div>
            <p className="eyebrow"><span /> Direct Contact</p>
            <h2>Start with the property and the problem.</h2>
            <p className="contact-intro">Include the service location, what the system is doing, when it started and whether water or gas is actively leaking.</p>
            <ContactDetails />
          </div>
          <div>
            <p className="eyebrow"><span /> Estimate Request</p>
            <ContactForm />
          </div>
        </div>
      </section>
      <section className="emergency-band"><div className="wrap"><div><p>Urgent plumbing problem?</p><h2>Do not wait on the form for an active leak.</h2></div><a href={business.phoneHref}><Phone /><span><small>Call DK Now</small><strong>{business.phone}</strong></span></a></div></section>
      <BreadcrumbSchema slug="contact-us" title="Contact" />
    </>
  );
}

function LocationPage({ slug }: { slug: string }) {
  const parsed = parseLocationPage(slug);
  if (!parsed) notFound();
  const { city, kind } = parsed;
  const service = kind === "plumbing" ? serviceBySlug.plumbing : kind === "heating" ? serviceBySlug["boiler-hydronic-services"] : serviceBySlug["hot-water-heater-replacement"];
  const title = kind === "plumbing" ? `Plumbing in ${city.name}` : kind === "heating" ? `Boiler & Hydronic Heating in ${city.name}` : `Hot Water Heater Replacement in ${city.name}`;
  const localCopy = kind === "plumbing" ? city.context : kind === "heating" ? city.heating : city.waterHeater;
  const intentDetails = locationIntentDetails[kind];
  const serviceLabel = kind === "plumbing" ? "Plumbing" : kind === "heating" ? "Boiler & Hydronic Heating" : "Water Heater Replacement";
  const intro = kind === "plumbing"
    ? `Licensed residential, commercial and construction plumbing for ${city.name}, Colorado, backed by Master Plumber ${business.license}.`
    : kind === "heating"
      ? `Boiler, radiant and water-based hydronic heating service for ${city.name} homes and commercial properties.`
      : `Complete, code-compliant water-heater replacement for ${city.name} homes and businesses.`;
  const localFaqs = [
    { question: `Does DK serve ${city.name}?`, answer: `Yes. ${city.name} is one of DK Plumbing & Heating's current location-specific service areas. Call ${business.phone} with the property address and service needed.` },
    { question: `What ${kind === "water-heater" ? "water-heater" : kind === "heating" ? "hydronic heating" : "plumbing"} work do you handle in ${city.name}?`, answer: `${intentDetails.map((item) => item.title).join(", ")}, and related system work. The exact scope follows an assessment of the property and equipment.` },
    { question: `Do you work on both homes and commercial properties in ${city.name}?`, answer: `Yes. DK supports residential, commercial, remodel and new-construction plumbing. ${city.commercial}` },
    { question: `When should I call for ${serviceLabel.toLowerCase()} in ${city.name}?`, answer: kind === "plumbing" ? "Call promptly for active leaks, repeated drain backups, sewer odors, unexplained pressure changes, frozen piping, water damage or any situation requiring the main water or gas supply to be shut down." : kind === "heating" ? "Call when a boiler will not fire, zones heat unevenly, pressure changes, circulators become noisy, air repeatedly enters the system or radiant areas stay cold." : "Call when hot water is lost, recovery becomes slow, the tank leaks, a relief valve discharges, the burner repeatedly fails or the existing unit is approaching replacement." },
    { question: "Are permits and inspections handled?", answer: `When a ${city.name} plumbing scope requires municipal approval, DK can coordinate the applicable permit and inspection steps as part of the project scope.` },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: intro,
    serviceType: intentDetails.map((item) => item.title),
    provider: { "@id": "https://dkplumbingandheatingco.com/#business" },
    areaServed: { "@type": "City", name: city.name },
    url: `https://dkplumbingandheatingco.com/${slug}/`,
  };

  return (
    <>
      <InteriorHero title={title} intro={intro} image={service.image} imageAlt={service.imageAlt} eyebrow={`${city.name}, Colorado`} parent={{ label: "Service Areas", href: "/service-areas" }} />
      <section className="location-trust-band">
        <div className="wrap">
          <div><small>Current area</small><strong>{city.name}, Colorado</strong></div>
          <div><small>Property fit</small><strong>Residential · Commercial</strong></div>
          <div><small>Plumbing depth</small><strong>Repair · Remodel · Construction</strong></div>
          <div><small>Credential</small><strong>Master Plumber {business.license}</strong></div>
        </div>
      </section>
      <section className="section section--dark local-overview-section">
        <div className="wrap content-split location-copy-grid">
          <div className="content-split-copy">
            <p className="eyebrow"><span /> Local Plumbing Context</p>
            <h2>{serviceLabel} planned around {city.name} properties.</h2>
            <p>{localCopy}</p>
            <p>{city.propertyProfile}</p>
            <LicenseProof />
          </div>
          <div className="local-search-panel">
            <p className="eyebrow"><span /> High-Intent Services</p>
            <h3>Specific help in {city.name}.</h3>
            <div>
              {intentDetails.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{item.title}</strong><p>{item.detail}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section local-fit-section">
        <div className="wrap">
          <div className="section-heading section-heading--row">
            <div><p className="eyebrow"><span /> Built for the Scope</p><h2>More than a broad “plumber near me” result.</h2></div>
            <p>DK combines service plumbing with specialized hydronic, gas, commercial and construction capability.</p>
          </div>
          <div className="local-fit-grid">
            <article><small>01 · Property profile</small><h3>{city.name} homes and buildings</h3><p>{city.propertyProfile}</p></article>
            <article><small>02 · Commercial capability</small><h3>Business and project plumbing</h3><p>{city.commercial}</p></article>
            <article><small>03 · Work standard</small><h3>Diagnosed, scoped and tested</h3><p>DK checks the connected system, explains the required components and completes work around applicable code, permit and inspection requirements.</p></article>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="section-heading section-heading--row"><div><p className="eyebrow"><span /> More in {city.name}</p><h2>Connected local services.</h2></div><p>Move between plumbing, hydronic heating and water-heater pages for the same service area.</p></div>
          <div className="location-service-links">
            <Link href={`/plumbing-in-${city.slug}`}><small>General Service</small><strong>Plumbing in {city.name}<ArrowRight /></strong></Link>
            <Link href={`/heating-solutions-in-${city.slug}`}><small>Water-Based Heat</small><strong>Boilers & Hydronics in {city.name}<ArrowRight /></strong></Link>
            <Link href={`/hot-water-heater-replacement-in-${city.slug}`}><small>Equipment</small><strong>Water Heaters in {city.name}<ArrowRight /></strong></Link>
          </div>
        </div>
      </section>
      <section className="section section--dark"><div className="wrap faq-grid"><div className="faq-intro"><p className="eyebrow"><span /> {city.name} FAQs</p><h2>Before scheduling service.</h2><p>Call with the address and a short description of what is happening.</p><a href={business.phoneHref}>{business.phone} <ArrowRight /></a></div><FAQSection items={localFaqs} /></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FAQSchema items={localFaqs} />
      <BreadcrumbSchema slug={slug} title={title} parent={{ title: "Service Areas", path: "/service-areas/" }} />
    </>
  );
}

function CorePage({ slug }: { slug: string }) {
  switch (slug) {
    case "about-us": return <AboutPage />;
    case "services": return <ServicesIndex />;
    case "projects": return <ProjectsPage />;
    case "dedicated-contractor": return <ContractorPage />;
    case "service-areas": return <ServiceAreasPage />;
    case "contact-us": return <ContactPage />;
    default: notFound();
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  if (!allSlugs.includes(slug)) notFound();
  const service = serviceBySlug[slug];
  const location = parseLocationPage(slug);

  return (
    <SiteShell>
      <main className="interior-main">
        {service ? <ServicePage service={service} /> : location ? <LocationPage slug={slug} /> : corePages.includes(slug) ? <CorePage slug={slug} /> : null}
      </main>
    </SiteShell>
  );
}
