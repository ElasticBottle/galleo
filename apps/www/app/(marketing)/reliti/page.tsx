"use client";

import { Icons } from "@galleo/ui/icon";
import { cn } from "@galleo/ui/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default function ReLitiPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-playfair text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Click Once. ReLiti Does The Rest.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground">
              ReLiti automates E-Litigation downloads with one click so you never waste time on mindless clicking again.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="https://chrome.google.com/webstore/detail/reliti/your-extension-id"
                target="_blank"
                className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get ReLiti & Reclaim Your Time
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Valuable time, squandered clicking.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Every hour spent manually clicking on E-Litigation is an hour taken away from crucial legal work.
            </p>
            
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Without ReLiti */}
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">Without ReLiti</h3>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                  {/* Replace with actual GIF */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icons.refresh className="h-8 w-8 text-red-600" />
                    <p className="ml-2 text-muted-foreground">Manual Clicking</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Repetitive clicking and frustration as you manually download each file.
                </p>
              </div>
              
              {/* With ReLiti */}
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold">With ReLiti</h3>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                  {/* Replace with actual GIF */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icons.bot className="h-8 w-8 text-green-600" />
                    <p className="ml-2 text-muted-foreground">ReLiti Automation</p>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  One click and ReLiti automatically handles all downloads for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and How to Use Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple Pricing. Easy Setup.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Getting started with ReLiti is quick and straightforward.
            </p>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                  <Icons.refresh className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">1. Install</h3>
                <p className="text-muted-foreground">Download ReLiti from the Chrome Web Store in seconds</p>
              </div>
              
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                  <Icons.bot className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">2. Sign In</h3>
                <p className="text-muted-foreground">Connect with your Microsoft account</p>
              </div>
              
              <div className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm">
                <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                  <Icons.thumbsUp className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">3. Start Using</h3>
                <p className="text-muted-foreground">Navigate to E-Litigation and enjoy the automation</p>
              </div>
            </div>
            
            <div className="mt-12 rounded-lg border bg-card p-8 shadow-sm">
              <h3 className="text-2xl font-bold">Pricing</h3>
              <div className="mt-4 flex flex-col items-center sm:flex-row sm:justify-center">
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">First 2 uses</span>
                  <p className="text-2xl font-bold text-green-600">FREE</p>
                </div>
                <div className="mx-4 h-6 border-l border-gray-300 sm:h-12"></div>
                <div className="text-center">
                  <span className="text-sm text-muted-foreground">After that</span>
                  <p className="text-2xl font-bold">$10/month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Click to Automation Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              One Click to Automation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Experience the value of automation with these key benefits:
            </p>
            
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Icons.refresh className="h-6 w-6" />,
                  title: "Reclaim Hours",
                  description: "Save valuable time for meaningful legal work",
                },
                {
                  icon: <Icons.bot className="h-6 w-6" />,
                  title: "Boost Productivity",
                  description: "Focus on analysis and strategy, not clicking",
                },
                {
                  icon: <Icons.thumbsUp className="h-6 w-6" />,
                  title: "Eliminate Tedium",
                  description: "No more repetitive manual downloads",
                },
                {
                  icon: <Icons.edit className="h-6 w-6" />,
                  title: "Seamless E-Liti",
                  description: "Works perfectly with your existing workflow",
                },
                {
                  icon: <Icons.logo className="h-6 w-6" />,
                  title: "Built for Legal Innovation",
                  description: "Powered by Galleo AI's expertise",
                },
                {
                  icon: <Icons.sun className="h-6 w-6" />,
                  title: "Simply Better",
                  description: "Improved experience with smart automation",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm transition-transform hover:scale-105"
                >
                  <div className="mb-4 rounded-full bg-blue-100 p-3 dark:bg-blue-900">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Click Less?
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://chrome.google.com/webstore/detail/reliti/your-extension-id"
                target="_blank"
                className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 text-base font-medium text-blue-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                Get ReLiti Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 