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
            "bg-accent hover:bg-accent/90 text-white font-medium rounded-md px-5 py-2.5 shadow-sm",
            "flex w-full items-center justify-center gap-2 sm:w-auto [&_svg]:size-3",
          )}
          data-attr={`hero-cta-${siteConfig.hero.cta.label}`}
          target={siteConfig.hero.cta.target}
        >
          <siteConfig.icon />
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
