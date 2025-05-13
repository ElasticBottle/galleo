import { buttonVariants } from "@galleo/ui/components/base/button";
import { cn } from "@galleo/ui/utils/cn";
import Image from "next/image";
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
            "cta-button-light dark:bg-blue-700 dark:hover:bg-blue-600 dark:text-white font-medium rounded-md px-5 py-3 shadow-sm",
            "flex w-full items-center justify-center gap-2 sm:w-auto",
          )}
        >
          Try
          <Image
            src="/galeo-ll-logo-light-mode.svg"
            alt="Galleo logo"
            width={80}
            height={24}
            className="inline h-6 w-auto align-middle"
          />
          Today
        </Link>
      </div>
    </Section>
  );
}
