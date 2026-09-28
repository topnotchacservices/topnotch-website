"use client";

import { useEffect } from "react";
import Script from "next/script";

const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const phoneClickLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_CLICK_LABEL;
const formSubmitLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_SUBMIT_LABEL;
const validAdsId = adsId && /^AW-\d+$/.test(adsId) ? adsId : null;
const validPhoneClickLabel = phoneClickLabel && /^[A-Za-z0-9_-]+$/.test(phoneClickLabel) ? phoneClickLabel : null;
const validFormSubmitLabel = formSubmitLabel && /^[A-Za-z0-9_-]+$/.test(formSubmitLabel) ? formSubmitLabel : null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function sendConversion(label: string | null) {
  if (!validAdsId || !label) return;
  window.gtag?.("event", "conversion", { send_to: `${validAdsId}/${label}` });
}

export function trackContactFormSuccess() {
  sendConversion(validFormSubmitLabel);
}

export function GoogleAdsTracking() {
  useEffect(() => {
    if (!validAdsId || !validPhoneClickLabel) return;

    function handleClick(event: MouseEvent) {
      if (event.target instanceof Element && event.target.closest('a[href^="tel:"]')) {
        sendConversion(validPhoneClickLabel);
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  if (!validAdsId || (!validPhoneClickLabel && !validFormSubmitLabel)) return null;

  return (
    <>
      <Script id="google-ads-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; window.gtag = function(){window.dataLayer.push(arguments)}; window.gtag('js', new Date()); window.gtag('config', '${validAdsId}');`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${validAdsId}`} strategy="afterInteractive" />
    </>
  );
}