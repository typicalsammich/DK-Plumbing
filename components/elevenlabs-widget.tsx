"use client";

import Script from "next/script";
import { useEffect } from "react";

const AGENT_ID = "agent_8701m156swwsev5rmp59p3g5fjmp";

export default function ElevenLabsWidget() {
  useEffect(() => {
    const widget = document.getElementById("dk-elevenlabs-widget");
    if (!widget) return;

    const media = window.matchMedia("(max-width: 760px)");

    const syncWidget = () => {
      widget.setAttribute("variant", media.matches ? "tiny" : "compact");
      widget.setAttribute("dismissible", "false");
      widget.setAttribute("avatar-image-url", `${window.location.origin}/images/dk-plumbing-logo.jpg`);

      const viewport = window.visualViewport;
      const coveredBottom = viewport
        ? Math.max(0, window.innerHeight - viewport.height - viewport.offsetTop)
        : 0;

      document.documentElement.style.setProperty(
        "--dk-browser-bottom-offset",
        `${coveredBottom}px`,
      );
    };

    syncWidget();

    if (media.addEventListener) media.addEventListener("change", syncWidget);
    window.addEventListener("resize", syncWidget);
    window.addEventListener("orientationchange", syncWidget);
    window.visualViewport?.addEventListener("resize", syncWidget);
    window.visualViewport?.addEventListener("scroll", syncWidget);

    return () => {
      if (media.removeEventListener) media.removeEventListener("change", syncWidget);
      window.removeEventListener("resize", syncWidget);
      window.removeEventListener("orientationchange", syncWidget);
      window.visualViewport?.removeEventListener("resize", syncWidget);
      window.visualViewport?.removeEventListener("scroll", syncWidget);
      document.documentElement.style.removeProperty("--dk-browser-bottom-offset");
    };
  }, []);

  return (
    <>
      <div
        id="dk-elevenlabs-widget-mount"
        dangerouslySetInnerHTML={{
          __html: `<elevenlabs-convai id="dk-elevenlabs-widget" agent-id="${AGENT_ID}" variant="compact" dismissible="false" avatar-image-url="/images/dk-plumbing-logo.jpg" action-text="Talk to DK"></elevenlabs-convai>`,
        }}
      />
      <Script
        id="dk-elevenlabs-embed"
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
