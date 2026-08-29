import Link from "next/link";
import { ArrowRight, Check, Phone, ShieldCheck, Wrench } from "lucide-react";
import {
  ArrowLink,
  FAQSection,
  LicenseProof,
  ProjectGallery,
  ReviewFeature,
  ServiceExplorer,
  SiteShell,
} from "@/components/site-ui";
import { business, cities, faqs, specialtySearches } from "@/lib/site-data";

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <SiteShell>
      <main>
        <section className="home-hero">
          <video autoPlay muted loop playsInline preload="metadata" poster="/images/sink-drain-work.webp" aria-hidden="true">
            <source src="/video/plumber-under-sink.mp4" type="video/mp4" media="(min-width: 781px)" />
          </video>
          <div className="hero-shade" />
          <div className="hero-content wrap">
            <p className="eyebrow"><span /> Colorado Front Range</p>
            <h1>Colorado Springs plumbing, boilers and hydronic heat done right.</h1>
            <p className="hero-copy">
              Licensed residential, commercial and construction plumbing in Colorado Springs,
              Denver Metro and surrounding Front Range communities.
            </p>
            <div className="hero-actions">
              <ArrowLink href="/contact-us">Get an Estimate</ArrowLink>
              <a href={business.phoneHref} className="hero-call"><Phone size={18} /> Call {business.phone}</a>
            </div>
            <div className="hero-proof" aria-label="DK service qualifications">
              <span><ShieldCheck size={18} /> Master Plumber {business.license}</span>
              <span><Wrench size={18} /> Residential & Commercial</span>
              <span><Check size={18} /> Licensed & Insured</span>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about DK"><span /> Scroll</a>
        </section>

        <section className="credibility-strip">
          <div className="wrap">
            <span>Licensed Master Plumber</span>
            <span>Boiler & Hydronic Specialists</span>
            <span>Residential · Commercial · New Construction</span>
            <span>Emergency Plumbing</span>
          </div>
        </section>

        <section className="about-home section" id="about">
          <div className="wrap about-home-grid">
            <div className="section-heading">
              <p className="eyebrow"><span /> About DK</p>
              <h2>Clear communication. Code-compliant work. No guesswork.</h2>
            </div>
            <div className="about-home-copy">
              <p>
                DK Plumbing & Heating LLC handles service work, remodels, commercial plumbing and new
                construction throughout Colorado&apos;s Front Range. The team brings particular depth to
                boilers, radiant heat and water-based hydronic systems.
              </p>
              <p>
                Every scope starts with understanding the system, explaining the work and completing it
                to the applicable plumbing and inspection requirements.
              </p>
              <ArrowLink href="/about-us" variant="text">Meet DK Plumbing & Heating</ArrowLink>
            </div>
            <figure className="about-home-image">
              <img src="/images/hydronic-mechanical-room.webp" alt="DK Plumbing and Heating multi-zone hydronic mechanical room" loading="lazy" />
              <figcaption>Real DK hydronic work</figcaption>
            </figure>
            <LicenseProof />
          </div>
        </section>

        <section className="review-section section section--dark">
          <div className="wrap">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow"><span /> Customer Reviews</p>
                <h2>Trusted in homes, facilities and active projects.</h2>
              </div>
              <p>Real customer feedback, paired with a direct path to DK&apos;s complete Google review profile.</p>
            </div>
            <ReviewFeature />
          </div>
        </section>

        <section className="services-home section">
          <div className="wrap">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow"><span /> Plumbing & Mechanical</p>
                <h2>One team for the system behind the walls.</h2>
              </div>
              <ArrowLink href="/services" variant="outline">View All Services</ArrowLink>
            </div>
            <ServiceExplorer />
          </div>
        </section>

        <section className="specialties-home section section--dark">
          <div className="wrap">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow"><span /> Specialized Search, Real Capability</p>
                <h2>The specific plumbing work behind the broad search.</h2>
              </div>
              <p>DK covers the technical terms customers, property managers and contractors use when they already know the system or symptom involved.</p>
            </div>
            <div className="specialty-search-grid">
              {specialtySearches.map((item, index) => (
                <Link href={item.href} key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                  <small>Explore service <ArrowRight size={15} /></small>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="why-dk">
          <div className="wrap why-dk-grid">
            <div>
              <p className="eyebrow eyebrow--light"><span /> Why DK</p>
              <h2>Professional plumbing support from diagnosis through inspection.</h2>
            </div>
            <div className="why-dk-license">
              <small>Colorado Master Plumber</small>
              <strong>{business.license}</strong>
              <span>Licensed and insured</span>
            </div>
            <div className="why-dk-points">
              <div><span>01</span><strong>Code compliant</strong><p>Work planned around safe installation and applicable inspection requirements.</p></div>
              <div><span>02</span><strong>Hydronic depth</strong><p>Hands-on knowledge of boilers, radiant heat, circulation and system controls.</p></div>
              <div><span>03</span><strong>Construction ready</strong><p>Residential, commercial, remodel and new-build plumbing support.</p></div>
              <div><span>04</span><strong>Direct communication</strong><p>Clear scope, job-site coordination and practical answers before work moves ahead.</p></div>
            </div>
          </div>
        </section>

        <section className="process-section section section--dark">
          <div className="wrap process-grid">
            <div className="process-intro">
              <p className="eyebrow"><span /> How the Work Moves</p>
              <h2>A straightforward path from the first call to final testing.</h2>
              <p>Urgent repair or planned construction, the sequence stays disciplined.</p>
              <ArrowLink href="/contact-us">Start a Conversation</ArrowLink>
            </div>
            <ol className="process-list">
              {[
                ["Request & Dispatch", "Explain the issue, location and urgency so DK can plan the right next step."],
                ["Diagnosis", "The system is inspected to identify the cause, not only the visible symptom."],
                ["Clear Scope", "DK explains the recommended work, required components and applicable approvals."],
                ["Code-Compliant Work", "Repairs or installation are completed carefully and coordinated around the property."],
                ["Final Testing & Cleanup", "Connections, flow and operation are checked before the area is left clean."],
              ].map(([title, copy], index) => (
                <li key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="projects-home section">
          <div className="wrap">
            <div className="section-heading section-heading--row">
              <div>
                <p className="eyebrow"><span /> Recent Work</p>
                <h2>The work is the proof.</h2>
              </div>
              <p>Real project photography from DK&apos;s website and public Facebook posts.</p>
            </div>
            <ProjectGallery limit={6} />
            <div className="section-end-link"><ArrowLink href="/projects" variant="outline">See More DK Projects</ArrowLink></div>
          </div>
        </section>

        <section className="emergency-band">
          <div className="wrap">
            <div>
              <p>Active leak, backup or no hot water?</p>
              <h2>Emergency plumbing starts with a direct call.</h2>
            </div>
            <a href={business.phoneHref}><Phone size={21} /><span><small>Call DK Plumbing</small><strong>{business.phone}</strong></span></a>
          </div>
        </section>

        <section className="faq-section section section--dark">
          <div className="wrap faq-grid">
            <div className="faq-intro">
              <p className="eyebrow"><span /> Common Questions</p>
              <h2>Useful answers before the first visit.</h2>
              <p>Still unsure who you need? Call DK and describe what the system is doing.</p>
              <a href={business.phoneHref}>{business.phone} <ArrowRight size={17} /></a>
            </div>
            <FAQSection />
          </div>
        </section>

        <section className="areas-home section">
          <div className="wrap areas-grid">
            <div>
              <p className="eyebrow"><span /> Service Area</p>
              <h2>Colorado Springs, Denver Metro and the Front Range.</h2>
              <p>Current location-specific plumbing, hydronic and water-heater coverage includes:</p>
            </div>
            <div className="area-links">
              {cities.map((city, index) => (
                <Link href={`/plumbing-in-${city.slug}`} key={city.slug}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{city.name}</strong>
                  <ArrowRight />
                </Link>
              ))}
              <Link className="all-areas" href="/service-areas">
                Explore All Service Areas <ArrowRight />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </SiteShell>
  );
}
