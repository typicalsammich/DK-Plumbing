import { ArrowLink, SiteShell } from "@/components/site-ui";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="not-found">
        <div>
          <strong>404</strong>
          <h1>This line does not lead anywhere.</h1>
          <p>The page may have moved. Return to the DK homepage or browse the complete service directory.</p>
          <ArrowLink href="/">Return Home</ArrowLink>
          <ArrowLink href="/services" variant="outline">View Services</ArrowLink>
        </div>
      </main>
    </SiteShell>
  );
}
