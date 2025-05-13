import { motion } from "framer-motion";
import { siteConfig } from "~/lib/site-config";
import { ease } from "./constant";

export function HeroTitle() {
  return (
    <div className="flex w-full max-w-2xl flex-col items-center space-y-6 overflow-hidden">
      <motion.h1
        className="text-center font-sans font-bold text-5xl text-foreground sm:text-6xl md:text-7xl tracking-tight"
        initial={{ filter: "blur(10px)", opacity: 0, y: 50 }}
        animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease,
          staggerChildren: 0.2,
        }}
      >
        {siteConfig.hero.title.map((text, index) => (
          <motion.span
            key={text}
            className="inline-block text-balance px-1 leading-[1.15] tracking-tight md:px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              ease,
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p
        className="mx-auto max-w-xl text-balance text-center text-xl text-muted-foreground leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease,
        }}
      >
        Galleo instantly generates complete <span className="text-accent font-semibold">trademark enquiry assessments</span>, precise <span className="text-accent font-semibold">fee quotes</span>, and accurate <span className="text-accent font-semibold">NICE classifications</span>—freeing your talent for billable work.
      </motion.p>
    </div>
  );
}
