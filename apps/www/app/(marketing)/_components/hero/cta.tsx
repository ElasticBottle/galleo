import { buttonVariants } from "@galleo/ui/components/base/button";
import { cn } from "@galleo/ui/utils/cn";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "~/lib/site-config";
import { ease } from "./constant";

export function HeroCTA() {
  return (
    <>
      <motion.div
        className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease }}
      >
        <Link
          href={siteConfig.hero.cta.href}
          className={cn(
            "dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground cta-button-light font-medium rounded-md px-5 py-2.5 shadow-sm",
            "flex w-full items-center justify-center sm:w-auto",
          )}
          data-attr={`hero-cta-${siteConfig.hero.cta.label}`}
          target={siteConfig.hero.cta.target}
        >
          {siteConfig.hero.cta.label}
        </Link>
      </motion.div>
      {siteConfig.hero.cta.subtitle && (
        <motion.p
          className="mt-5 text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          {siteConfig.hero.cta.subtitle}
        </motion.p>
      )}
    </>
  );
}
