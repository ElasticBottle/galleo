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
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <h1 className="font-playfair text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Click Once. ReLiti Does The Rest.
              </h1>
              <p className="text-xl text-muted-foreground">
                ReLiti automates E-Litigation downloads with one click so you never waste time on mindless clicking again.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="https://chrome.google.com/webstore/detail/reliti/your-extension-id"
                  target="_blank"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-base font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get ReLiti & Reclaim Your Time
                </Link>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {/* Replace with actual split-screen GIF */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg text-muted-foreground">Demo GIF Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Valuable time, squandered clicking.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Every hour spent manually clicking on E-Litigation is an hour taken away from crucial legal work.
            </p>
            <div className="mt-12 flex justify-center space-x-8">
              <div className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-red-100 p-4 dark:bg-red-900">
                  <Icons.refresh className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <p className="text-sm text-muted-foreground">Manual Clicking</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-green-100 p-4 dark:bg-green-900">
                  <Icons.bot className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <p className="text-sm text-muted-foreground">ReLiti Automation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              One Click to Automation.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              See how easy it is to automate your E-Litigation downloads. Just one click, and the tedious work is done for you.
            </p>
            <div className="mt-12 aspect-video overflow-hidden rounded-lg">
              {/* Replace with actual video embed */}
              <div className="relative h-full w-full bg-gray-200 dark:bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icons.play className="h-16 w-16 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Stop Clicking. Start Focusing.
            </h2>
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