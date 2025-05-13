import type { ReactNode } from "react";
import { cn } from "@galleo/ui/utils/cn";

interface SectionProps {
  id?: string;
  children: ReactNode;
  title?: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}

export function Section({
  children,
  title,
  subtitle,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "flex flex-col justify-center py-12 md:py-14",
        className,
      )}
      {...props}
    >
      <div className="container">
        <div className="space-y-4 text-center">
          {title ? (
            <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h2>
          ) : null}

          {subtitle ? (
            <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-relaxed">
              {subtitle}
            </h3>
          ) : null}
        </div>

        <div className="mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}
