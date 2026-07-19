"use client";

import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const SiteEffects = dynamic(
  () => import("./site-effects").then((module) => module.SiteEffects),
  { ssr: false },
);

export function DeferredSiteEffects({ children }: { children: ReactNode }) {
  return <SiteEffects>{children}</SiteEffects>;
}
