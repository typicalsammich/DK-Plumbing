"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  beforeAfterProjects,
  business,
  faqs,
  projects,
  reviews,
  serviceBySlug,
  serviceNavGroups,
  services,
  type Service,
} from "@/lib/site-data";

export function ArrowLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "text";
  className?: string;
}) {
  return (
    <Link className={`arrow-link arrow-link--${variant} ${className}`} href={href}>
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={17} />
    </Link>
  );
}

function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceIsActive = pathname === "/services"
    || services.some((service) => pathname === `/${service.slug}`)
    || /^\/(plumbing|heating-solutions|hot-water-heater-replacement)-in-/.test(pathname);
  const pageIsActive = (href: string) => pathname === href;

  useEffect(() => {
    if (!isHome) return;
    const update = () => setScrolled(window.scrollY > window.innerHeight * 0.72);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  const nav = [
    ["About", "/about-us"],
    ["Projects", "/projects"],
    ["Contractor", "/dedicated-contractor"],
    ["Service Areas", "/service-areas"],
  ];

  return (
    <header className={`site-header ${!isHome || scrolled ? "is-solid" : "is-transparent"}`}>
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="DK Plumbing and Heating home">
          <img src="/images/dk-logo.webp" alt="DK Plumbing and Heating circular logo" />
          <span className="brand-copy">
            <strong>DK Plumbing</strong>
            <small>& Heating LLC</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <Link className={pageIsActive("/about-us") ? "is-active" : ""} href="/about-us" aria-current={pageIsActive("/about-us") ? "page" : undefined}>About</Link>
          <div
            className={`services-menu ${servicesOpen ? "is-open" : ""}`}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocusCapture={() => setServicesOpen(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setServicesOpen(false);
            }}
          >
            <Link
              className={`services-menu-trigger ${serviceIsActive ? "is-active" : ""}`}
              href="/services"
              aria-current={pathname === "/services" ? "page" : undefined}
              onClick={() => setServicesOpen(false)}
            >
              Services <ChevronDown size={14} aria-hidden="true" />
            </Link>
            <div className="mega-menu" aria-label="Services menu">
              <div className="mega-menu-intro">
                <span>Licensed plumbing work</span>
                <strong>From service calls to complete mechanical scopes.</strong>
                <Link className={pathname === "/services" ? "is-active" : ""} href="/services" onClick={() => setServicesOpen(false)}>View all services <ArrowRight size={15} /></Link>
              </div>
              {serviceNavGroups.map((group) => (
                <div key={group.label}>
                  <p>{group.label}</p>
                  {group.slugs.map((slug) => (
                    <Link
                      className={pathname === `/${slug}` ? "is-active" : ""}
                      href={`/${slug}`}
                      key={slug}
                      aria-current={pathname === `/${slug}` ? "page" : undefined}
                      onClick={() => setServicesOpen(false)}
                    >
                      {serviceBySlug[slug].shortTitle}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {nav.slice(1).map(([label, href]) => (
            <Link className={pageIsActive(href) ? "is-active" : ""} href={href} key={href} aria-current={pageIsActive(href) ? "page" : undefined}>{label}</Link>
          ))}
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={business.phoneHref} aria-label={`Call ${business.phone}`}>
            <Phone size={16} aria-hidden="true" /> {business.phone}
          </a>
          <ArrowLink className={pageIsActive("/contact-us") ? "is-current-page" : ""} href="/contact-us">Get an Estimate</ArrowLink>
        </div>

        <Sheet>
          <SheetTrigger className="mobile-menu-button" aria-label="Open navigation">
            <Menu size={25} />
          </SheetTrigger>
          <SheetContent className="mobile-sheet" side="right">
            <SheetTitle className="sr-only">Navigation</SheetTitle>
            <SheetDescription className="sr-only">Browse DK Plumbing and Heating pages</SheetDescription>
            <div className="mobile-sheet-brand">
              <img src="/images/dk-logo.webp" alt="" />
              <span>DK Plumbing & Heating</span>
            </div>
            <nav aria-label="Mobile navigation">
              <SheetClose asChild><Link className={pageIsActive("/") ? "is-active" : ""} href="/" aria-current={pageIsActive("/") ? "page" : undefined}>Home</Link></SheetClose>
              <SheetClose asChild><Link className={pageIsActive("/about-us") ? "is-active" : ""} href="/about-us" aria-current={pageIsActive("/about-us") ? "page" : undefined}>About</Link></SheetClose>
              <SheetClose asChild><Link className={serviceIsActive ? "is-active" : ""} href="/services">All Services</Link></SheetClose>
              {services.slice(0, 6).map((service) => (
                <SheetClose asChild key={service.slug}>
                  <Link className={`mobile-sub-link ${pathname === `/${service.slug}` ? "is-active" : ""}`} href={`/${service.slug}`} aria-current={pathname === `/${service.slug}` ? "page" : undefined}>{service.shortTitle}</Link>
                </SheetClose>
              ))}
              <SheetClose asChild><Link className={pageIsActive("/projects") ? "is-active" : ""} href="/projects">Projects</Link></SheetClose>
              <SheetClose asChild><Link className={pageIsActive("/dedicated-contractor") ? "is-active" : ""} href="/dedicated-contractor">Contractor Support</Link></SheetClose>
              <SheetClose asChild><Link className={pageIsActive("/service-areas") ? "is-active" : ""} href="/service-areas">Service Areas</Link></SheetClose>
              <SheetClose asChild><Link className={pageIsActive("/contact-us") ? "is-active" : ""} href="/contact-us">Contact</Link></SheetClose>
            </nav>
            <div className="mobile-sheet-footer">
              <a href={business.phoneHref}><Phone size={17} /> {business.phone}</a>
              <a href={`mailto:${business.email}`}><Mail size={17} /> Email DK</a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-contact-rail">
        <Link className="footer-mark" href="/" aria-label="DK Plumbing and Heating home">
          <img src="/images/dk-logo.webp" alt="DK Plumbing and Heating logo" />
        </Link>
        <a href={business.phoneHref}><Phone /><span><small>Call DK</small><strong>{business.phone}</strong></span></a>
        <a href={`mailto:${business.email}`}><Mail /><span><small>Email</small><strong>{business.email}</strong></span></a>
        <ArrowLink href="/contact-us">Request an Estimate</ArrowLink>
      </div>
      <div className="footer-main wrap">
        <div className="footer-about">
          <p className="footer-label">About the Company</p>
          <p>DK Plumbing & Heating LLC is a licensed and insured plumbing contractor serving Colorado Springs, Denver Metro and the Colorado Front Range.</p>
          <p>DK specializes in boilers, remodels and new construction, with code-compliant work built for long-term performance.</p>
          <strong>Colorado Master Plumber {business.license}</strong>
        </div>
        <div className="footer-column">
          <p className="footer-label">Payment Options</p>
          <span>Credit cards accepted</span>
          <span>QuickBooks invoicing</span>
          <span>Transparent pricing</span>
          <span>Permit handling available</span>
        </div>
        <div className="footer-column">
          <p className="footer-label">Services</p>
          <Link href="/plumbing">Plumbing</Link>
          <Link href="/heating-solutions">Heating Solutions</Link>
          <Link href="/water-line-services">Water Line Services</Link>
          <Link href="/projects">Recent Work</Link>
        </div>
        <div className="footer-column">
          <p className="footer-label">Follow & Review</p>
          <a href={business.facebook} target="_blank" rel="noreferrer">Facebook <ExternalLink size={13} /></a>
          <a href={business.instagram} target="_blank" rel="noreferrer">Instagram <ExternalLink size={13} /></a>
          <a href={business.googleMaps} target="_blank" rel="noreferrer">Google Business <ExternalLink size={13} /></a>
        </div>
      </div>
      <div className="wrap footer-payments">
        <span>Accepted</span>
        <strong>VISA</strong><strong>Mastercard</strong><strong>American Express</strong><strong>Apple Pay</strong><strong>Google Pay</strong><strong>Maestro</strong>
      </div>
      <div className="footer-bottom wrap">
        <span>© {new Date().getFullYear()} DK Plumbing & Heating LLC · Licensed and insured</span>
        <div>
          <span>{business.address}</span>
          <a className="footer-review-link" href={business.googleReviews} target="_blank" rel="noreferrer">View Google Reviews <ExternalLink size={15} /></a>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <>
      <Header />
      <div className="page-transition" key={pathname}>{children}</div>
      <Footer />
      <div className="mobile-action-bar" aria-label="Quick actions">
        <a href={business.phoneHref}><Phone size={18} /> Call</a>
        <Link href="/contact-us">Get Estimate <ArrowRight size={17} /></Link>
      </div>
    </>
  );
}

export function ServiceExplorer() {
  const featured = services.filter((service) =>
    ["plumbing", "boiler-hydronic-services", "drain-sewer-services", "hot-water-heater-replacement", "commercial-plumbing"].includes(service.slug),
  );
  const [active, setActive] = useState(featured[0]);

  return (
    <div className="service-explorer">
      <div className="service-explorer-image">
        {featured.map((service) => (
          <img
            key={service.slug}
            className={active.slug === service.slug ? "is-active" : ""}
            src={service.image}
            alt={service.imageAlt}
            loading="lazy"
          />
        ))}
        <span>Residential · Commercial · Construction</span>
      </div>
      <div className="service-explorer-list">
        {featured.map((service, index) => (
          <Link
            className={active.slug === service.slug ? "is-active" : ""}
            href={`/${service.slug}`}
            key={service.slug}
            onMouseEnter={() => setActive(service)}
            onFocus={() => setActive(service)}
          >
            <span className="service-number">0{index + 1}</span>
            <span>
              <strong>{service.shortTitle}</strong>
              <small>{service.intro}</small>
            </span>
            <ArrowRight aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function ReviewFeature() {
  const [index, setIndex] = useState(0);
  const previous = () => setIndex((value) => (value - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((value) => (value + 1) % reviews.length);
  const review = reviews[index];

  return (
    <div className="review-feature">
      <div className="rating-summary">
        <span>Verified Google feedback</span>
        <div className="rating-score"><strong>5.0</strong><small>/ 5</small></div>
        <div className="rating-stars" aria-label="5 out of 5 stars">
          {[0, 1, 2, 3, 4].map((star) => <Star key={star} size={17} fill="currentColor" />)}
        </div>
        <p>Five-star feedback from homeowners, facilities and project partners.</p>
        <a href={business.googleReviews} target="_blank" rel="noreferrer">View all reviews on Google <ExternalLink size={15} /></a>
      </div>
      <div className="review-stage">
        <blockquote><p>“{review.quote}”</p><footer><span>{review.name}</span><small>Google review</small></footer></blockquote>
        <div className="review-controls">
          <div>{reviews.map((item, itemIndex) => <button className={itemIndex === index ? "is-active" : ""} onClick={() => setIndex(itemIndex)} aria-label={`Show review from ${item.name}`} key={item.name} />)}</div>
          <span>{String(index + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
          <button onClick={previous} aria-label="Previous review"><ArrowLeft /></button>
          <button onClick={next} aria-label="Next review"><ArrowRight /></button>
        </div>
      </div>
    </div>
  );
}

function capabilityNote(item: string) {
  const value = item.toLowerCase();
  if (/emergency|flood|shutdown|overflow|backup/.test(value)) return "A safety-first response to control the immediate problem, diagnose the cause and define a durable repair.";
  if (/inspection|diagnostic|testing|detection/.test(value)) return "Measured diagnosis before materials or labor are committed, with findings explained in plain language.";
  if (/install|replacement|repiping|rerouting|rough-in|top-out|trim-out/.test(value)) return "Installed around access, system demand and the code requirements that apply to the property.";
  if (/clean|clog|jetting|root|descaling|purging/.test(value)) return "Restores performance while checking for the condition that caused the restriction or loss of flow.";
  return "Scoped to the condition of the system, the property and the connected components—not a one-size-fits-all repair.";
}

const capabilityImageSets: Record<string, string[]> = {
  plumbing: [
    "/images/cap-wall-piping.webp", "/images/cap-shower-valve.webp", "/images/before-after-shutoff-before.jpg",
    "/images/cap-underground-water.webp", "/images/before-after-drain-after.jpg", "/images/cap-under-sink.webp",
  ],
  "heating-solutions": [
    "/images/dual-tankless-installation.webp", "/images/cap-water-heater.webp", "/images/cap-water-heater-service.webp",
    "/images/hydronic-mechanical-room.webp", "/images/project-hydronic-2.webp", "/images/cap-boiler-service.webp",
  ],
  "drain-sewer-services": [
    "/images/cap-drain-service.webp", "/images/before-after-drain-after.jpg", "/images/cap-system-testing.webp",
    "/images/drain-line-replacement.webp", "/images/cap-sewer-exterior.webp", "/images/cap-under-sink.webp",
    "/images/cap-underground-water.webp", "/images/project-sink-plumbing.webp",
  ],
  "water-line-services": [
    "/images/cap-underground-water.webp", "/images/cap-wall-piping.webp", "/images/before-after-shutoff-after.jpg",
    "/images/cap-sewer-exterior.webp", "/images/cap-system-testing.webp", "/images/cap-laundry.webp",
    "/images/cap-commercial-system.webp", "/images/rough-in-plumbing.webp",
  ],
  "fixture-services": [
    "/images/cap-faucet.webp", "/images/shower-1.jpg", "/images/cap-shower-valve.webp", "/images/toilet-installation.webp",
    "/images/cap-fixture-service.webp", "/images/cap-disposal.webp", "/images/cap-laundry.webp", "/images/cap-sink-faucet.webp",
  ],
  "gas-line-services": [
    "/images/cap-gas-gauge.webp", "/images/cap-gas-fittings.webp", "/images/cap-gas-components.webp", "/images/cap-gas-shutoff.webp",
    "/images/cap-gas-appliance.webp", "/images/cap-system-testing.webp", "/images/cap-boiler-burner.webp", "/images/cap-commercial-system.webp",
  ],
  "pipe-installation-repiping": [
    "/images/cap-wall-piping.webp", "/images/cap-commercial-system.webp", "/images/project-rough-in-2.webp", "/images/rough-in-plumbing.webp",
    "/images/cap-sink-rough.webp", "/images/cap-underground-water.webp", "/images/project-hydronic-2.webp", "/images/laundry-plumbing-upgrade.webp",
  ],
  "commercial-plumbing": [
    "/images/cap-commercial-system.webp", "/images/project-hydronic-2.webp", "/images/cap-disposal.webp", "/images/cap-laundry.webp",
    "/images/cap-water-filter.webp", "/images/cap-fixture-service.webp", "/images/cap-water-heater.webp", "/images/cap-gas-components.webp",
    "/images/cap-backflow-test.webp",
  ],
  "water-quality-services": [
    "/images/cap-filtration.webp", "/images/cap-under-sink.webp", "/images/cap-water-filter.webp", "/images/cap-commercial-system.webp",
    "/images/dual-tankless-installation.webp", "/images/cap-system-testing.webp", "/images/cap-faucet-cartridge.webp",
  ],
  "sump-sewage-systems": [
    "/images/cap-sump-install.webp", "/images/cap-sewer-exterior.webp", "/images/cap-drain-service.webp", "/images/cap-system-testing.webp",
    "/images/drain-line-replacement.webp", "/images/cap-battery-backup.webp", "/images/cap-underground-water.webp",
  ],
  "boiler-hydronic-services": [
    "/images/hydronic-mechanical-room.webp", "/images/cap-boiler-service.webp", "/images/project-hydronic-2.webp", "/images/cap-boiler-burner.webp",
    "/images/cap-commercial-system.webp", "/images/cap-system-testing.webp", "/images/dual-tankless-installation.webp", "/images/cap-water-heater-service.webp",
  ],
  "inspection-code-compliance": [
    "/images/cap-system-testing.webp", "/images/cap-gas-gauge.webp", "/images/cap-backflow-test.webp", "/images/project-rough-in-2.webp",
    "/images/cap-wall-piping.webp", "/images/cap-commercial-system.webp", "/images/cap-fixture-service.webp", "/images/cap-laundry.webp",
  ],
  "emergency-plumbing-services": [
    "/images/cap-wall-piping.webp", "/images/before-after-drain-before.jpg", "/images/cap-gas-shutoff.webp", "/images/cap-water-heater-service.webp",
    "/images/toilet-installation.webp", "/images/cap-sewer-exterior.webp", "/images/cap-underground-water.webp", "/images/project-sink-plumbing.webp",
  ],
  "preventative-maintenance": [
    "/images/cap-system-testing.webp", "/images/cap-drain-service.webp", "/images/cap-water-heater-service.webp", "/images/cap-boiler-service.webp",
    "/images/cap-filtration.webp", "/images/before-after-shutoff-before.jpg", "/images/cap-gas-gauge.webp", "/images/cap-fixture-service.webp",
  ],
  "hot-water-heater-replacement": [
    "/images/dual-tankless-installation.webp", "/images/cap-water-heater.webp", "/images/cap-water-heater-service.webp", "/images/cap-gas-fittings.webp",
    "/images/cap-gas-shutoff.webp", "/images/cap-system-testing.webp", "/images/cap-commercial-system.webp", "/images/hydronic-mechanical-room.webp",
  ],
};

export function ServiceCapabilityShowcase({ service }: { service: Service }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = service.items[activeIndex];
  const activeImage = capabilityImageSets[service.slug]?.[activeIndex] ?? service.image;
  return (
    <div className="capability-showcase">
      <div className="capability-grid" role="list" aria-label={`${service.title} service capabilities`}>
        {service.items.map((item, index) => (
          <button
            className={index === activeIndex ? "is-active" : ""}
            key={item}
            onClick={() => setActiveIndex(index)}
            onMouseEnter={() => setActiveIndex(index)}
            onFocus={() => setActiveIndex(index)}
            role="listitem"
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <Check size={18} aria-hidden="true" />
            <strong>{item}</strong>
          </button>
        ))}
      </div>
      <div className="capability-stage">
        <img key={activeImage} src={activeImage} alt={`${active} example from DK Plumbing & Heating`} loading="lazy" />
        <div><small>Selected capability</small><h3>{active}</h3><p>{capabilityNote(active)}</p></div>
      </div>
    </div>
  );
}

export function BeforeAfterComparison() {
  const [value, setValue] = useState(52);
  const [projectIndex, setProjectIndex] = useState(0);
  const project = beforeAfterProjects[projectIndex];
  const selectProject = (index: number) => {
    setProjectIndex(index);
    setValue(52);
  };
  const previous = () => selectProject((projectIndex - 1 + beforeAfterProjects.length) % beforeAfterProjects.length);
  const next = () => selectProject((projectIndex + 1) % beforeAfterProjects.length);
  return (
    <div className="before-after">
      <div className="before-after-copy">
        <p className="eyebrow"><span /> Posted by DK</p>
        <h2>Real before. Real after.</h2>
        <p>Every comparison comes from a before-and-after carousel published by DK. Drag the handle across the image, then choose another project.</p>
        <div className="comparison-projects" role="tablist" aria-label="Before and after projects">
          {beforeAfterProjects.map((item, index) => (
            <button
              className={index === projectIndex ? "is-active" : ""}
              key={item.title}
              onClick={() => selectProject(index)}
              role="tab"
              aria-selected={index === projectIndex}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item.title}</strong>
            </button>
          ))}
        </div>
      </div>
      <div className="comparison-frame" style={{ "--compare": `${value}%` } as React.CSSProperties}>
        <img key={`${project.title}-after`} className="comparison-after" src={project.after} alt={project.afterAlt} />
        <div className="comparison-before"><img key={`${project.title}-before`} src={project.before} alt={project.beforeAlt} /></div>
        <span className="comparison-label comparison-label--before">Before</span>
        <span className="comparison-label comparison-label--after">After</span>
        <span className="comparison-handle" aria-hidden="true" />
        <input
          className="comparison-range"
          type="range"
          min="4"
          max="96"
          step="1"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
          aria-label={`Compare before and after: ${project.title}`}
        />
      </div>
      <div className="comparison-control">
        <div><small>{project.type}</small><strong>{project.title}</strong><p>{project.detail}</p></div>
        <a href={project.source} target="_blank" rel="noreferrer">View original DK post <ExternalLink size={14} /></a>
        <button onClick={previous} aria-label="Previous before and after project"><ArrowLeft /></button>
        <span>{String(projectIndex + 1).padStart(2, "0")} / {String(beforeAfterProjects.length).padStart(2, "0")}</span>
        <button onClick={next} aria-label="Next before and after project"><ArrowRight /></button>
      </div>
    </div>
  );
}

export function ProjectGallery({ limit }: { limit?: number }) {
  const shown = typeof limit === "number" ? projects.slice(0, limit) : projects;
  return (
    <div className="project-gallery">
      {shown.map((project, index) => (
        <Dialog key={project.title}>
          <DialogTrigger className={`project-tile project-tile--${(index % 3) + 1}`}>
            <img src={project.image} alt={project.alt} loading="lazy" />
            <span className="project-overlay">
              <small>{project.type}</small>
              <strong>{project.title}</strong>
              <span>View project <ExternalLink size={15} /></span>
            </span>
          </DialogTrigger>
          <DialogContent className="project-dialog">
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.type}</DialogDescription>
            <img src={project.image} alt={project.alt} />
            <p>{project.detail}</p>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}

export function FAQSection({ items = faqs }: { items?: typeof faqs }) {
  return (
    <Accordion type="single" collapsible className="faq-list">
      {items.map((faq, index) => (
        <AccordionItem value={`faq-${index}`} key={faq.question}>
          <AccordionTrigger>
            <span className="faq-number">{String(index + 1).padStart(2, "0")}</span>
            <span>{faq.question}</span>
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function ProofList({ items }: { items: string[] }) {
  return (
    <ul className="proof-list">
      {items.map((item) => (
        <li key={item}><Check size={17} aria-hidden="true" /> {item}</li>
      ))}
    </ul>
  );
}

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Estimate request from ${form.get("name") || "website visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name") || ""}\nPhone: ${form.get("phone") || ""}\nEmail: ${form.get("email") || ""}\nService: ${form.get("service") || ""}\nZIP: ${form.get("zip") || ""}\n\nProject details:\n${form.get("message") || ""}`,
    );
    setSent(true);
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <form className={`contact-form ${compact ? "is-compact" : ""}`} onSubmit={submit}>
      <div className="form-row">
        <label>Name<input name="name" autoComplete="name" required /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
      </div>
      <div className="form-row">
        <label>Email<input name="email" type="email" autoComplete="email" required /></label>
        <label>ZIP code<input name="zip" inputMode="numeric" autoComplete="postal-code" /></label>
      </div>
      <label>
        Service needed
        <select name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Plumbing repair</option>
          <option>Boiler or hydronic heat</option>
          <option>Water heater</option>
          <option>Drain or sewer</option>
          <option>Commercial or construction</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        What is going on?
        <textarea name="message" rows={compact ? 3 : 5} required />
      </label>
      <button type="submit">Send Estimate Request <ArrowRight size={17} /></button>
      <p className="form-note">
        {sent ? "Your email app should open with the request ready to send." : "For an active leak or urgent plumbing problem, call DK directly."}
      </p>
    </form>
  );
}

export function LicenseProof() {
  return (
    <div className="license-proof">
      <ShieldCheck aria-hidden="true" />
      <span><small>Colorado Master Plumber</small><strong>{business.license}</strong></span>
    </div>
  );
}

export function ContactDetails() {
  return (
    <div className="contact-details">
      <a href={business.phoneHref}><Phone /><span><small>Call DK</small><strong>{business.phone}</strong></span></a>
      <a href={`mailto:${business.email}`}><Mail /><span><small>Email</small><strong>{business.email}</strong></span></a>
      <div><MapPin /><span><small>Service base</small><strong>{business.address}</strong></span></div>
    </div>
  );
}
