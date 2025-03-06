"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@galleo/ui/components/base/navigation-menu";
import { cn } from "@galleo/ui/utils/cn";
import Link from "next/link";
import { type HeaderButtonConfig, siteConfig } from "~/lib/site-config";

export function NavigationLinks() {
  const navigationItems = siteConfig.header
    .filter((item): item is HeaderButtonConfig => 
      item.variant === "button" && item.buttonVariant === "navigation"
    );

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-6">
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.label}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                data-attr={`header-button-${item.label}`}
                className="px-4 py-2 text-base transition-colors hover:bg-blue-50 dark:hover:bg-blue-950 rounded-md"
                target={item.target}
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
} 