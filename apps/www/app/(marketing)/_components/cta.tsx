import { buttonVariants } from "@galleo/ui/components/base/button";
import { cn } from "@galleo/ui/utils/cn";
import Link from "next/link";
import { siteConfig } from "~/lib/site-config";
import { Section } from "./section";

export function Cta() {
  if (!siteConfig.cta) return null;

  return (
    <Section
      id="cta"
      title={siteConfig.cta.title}
      subtitle={<>Ready to <span className="text-accent">Stop Drafting</span> and <span className="text-accent">Start Billing</span>?</>}
      className="bg-primary/10 py-16 xl:rounded-lg"
    >
      <div className="flex w-full items-center justify-center pt-4">
        <Link
          href={siteConfig.cta.href}
          target="_blank"
          className={cn(
            "dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground cta-button-light font-medium rounded-md px-5 py-3 shadow-sm",
            "flex w-full items-center justify-center gap-2 sm:w-auto",
          )}
        >
          {siteConfig.cta.buttonText}
        </Link>
      </div>
    </Section>
  );
}
