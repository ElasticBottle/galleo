import { Icons } from "@galleo/ui/icon";
import { cn } from "@galleo/ui/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { ROUTE_HOME } from "~/lib/routes";
import { siteConfig } from "~/lib/site-config";

export function BrandButton({ className }: { className?: string }) {
  return (
    <Link
      href={ROUTE_HOME}
      title={siteConfig.name}
      className={cn("flex items-center space-x-3", className)}
    >
      <Image
        src="/galeo-ll-logo-light-mode.svg"
        alt={siteConfig.name}
        width={150}
        height={50}
        className="h-[40px] w-[120px] md:h-[50px] md:w-[150px] dark:hidden"
      />
      <Image
        src="/galeo-ll-logo-dark-mode.svg"
        alt={siteConfig.name}
        width={150}
        height={50}
        className="hidden h-[40px] w-[120px] md:h-[50px] md:w-[150px] dark:block"
      />
    </Link>
  );
}
