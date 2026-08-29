"use client";

import Script from "next/script";
import { useEffect } from "react";

const AGENT_ID = "agent_8701m156swwsev5rmp59p3g5fjmp";

export default function ElevenLabsWidget() {
  useEffect(() => {
    const widget = document.getElementById("dk-elevenlabs-widget");
    if (!widget) return;

    const media = window.matchMedia("(max-width: 760px)");

    const syncVariant = () => {
      widget.setAttribute("variant", media.matches ? "tiny" : "compact");
      widget.setAttribute("dismissible", "false");
      widget.setAttribute("avatar-image-url", "/images/dk-plumbing-logo.jpg");
    };

    syncVariant();
    media.addEventListener?.("change", syncVariant);

    return () => {
      media.removeEventListener?.("change", syncVariant);
    };
  }, []);

  return (
    <>
      <div id="dk-elevenlabs-widget-shell" aria-label="DK Plumbing AI receptionist">
        <div
          dangerouslySetInnerHTML={{
            __html: `<elevenlabs-convai id="dk-elevenlabs-widget" agent-id="${AGENT_ID}" variant="compact" dismissible="false" avatar-image-url="/images/dk-plumbing-logo.jpg" action-text="Talk to DK"></elevenlabs-convai>`,
          }}
        />
      </div>
      <Script
        id="dk-elevenlabs-embed"
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
    </>
  );
}
