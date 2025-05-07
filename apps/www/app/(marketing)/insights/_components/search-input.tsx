"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Input } from "@galleo/ui/components/base/input";

export function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search articles by title or category..."
        className="w-full pl-10"
        defaultValue={searchParams.get("q") ?? ""}
        onChange={(e) => {
          router.push(`/insights?${createQueryString("q", e.target.value)}`);
        }}
      />
      <svg
        className="-translate-y-1/2 absolute top-1/2 left-3 h-4 w-4 text-muted-foreground"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    </div>
  );
}
