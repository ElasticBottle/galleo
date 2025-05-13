import type { ReactNode } from "react";
import { siteConfig } from "~/lib/site-config";

type Position = "left" | "right";

interface FeatureSectionProps {
  label: string;
  title: ReactNode;
  description: ReactNode;
  ctaText: string;
  showcaseContent: ReactNode;
  position?: Position;
}

export function FeatureSection({
  label,
  title,
  description,
  ctaText,
  showcaseContent,
  position = "right",
}: FeatureSectionProps) {
  const ContentSection = (
    <div className="flex h-full items-center bg-slate-200 dark:bg-slate-800 px-4 py-10 md:px-12 md:py-24 lg:px-24">
      <div className="max-w-xl">
        <span className="font-medium text-muted-foreground text-sm">
          {label}
        </span>
        <h2 className="mt-6 font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl leading-tight">
          {title}
        </h2>
        <div className="mt-6 text-lg text-muted-foreground leading-relaxed">{description}</div>
        {ctaText && (
          <a
            href={siteConfig.links.talkToUs}
            data-attr={ctaText}
            target="_blank"
            className="mt-8 flex items-center font-medium text-muted-foreground text-sm hover:text-foreground"
            rel="noreferrer"
          >
            {ctaText} &rarr;
          </a>
        )}
      </div>
    </div>
  );

  const ShowcaseSection = (
    <div className="flex h-full items-center bg-slate-700 dark:bg-foreground px-4 py-24 md:px-12 lg:px-24">
      {showcaseContent}
    </div>
  );

  return (
    <section className="container max-w-7xl px-0">
      <div className="grid w-full overflow-hidden md:grid-cols-2 xl:rounded-lg">
        {/* On mobile, ShowcaseSection is always first */}
        <div className="md:hidden">{ShowcaseSection}</div>
        <div className="md:hidden">{ContentSection}</div>

        {/* On desktop, order depends on position prop */}
        <div className="hidden md:block">
          {position === "left" ? ShowcaseSection : ContentSection}
        </div>
        <div className="hidden md:block">
          {position === "left" ? ContentSection : ShowcaseSection}
        </div>
      </div>
    </section>
  );
}
