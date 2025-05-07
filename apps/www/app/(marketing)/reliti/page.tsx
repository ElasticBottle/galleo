"use client";

import { Button } from "@galleo/ui/components/base/button";
import { Icons } from "@galleo/ui/icon";
import { cn } from "@galleo/ui/utils/cn";
import Image from "next/image";
import Link from "next/link";

export default function ReLitiPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 dark:from-blue-950 dark:to-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-center space-y-8">
              <h1 className="font-playfair text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Stop Wasting Precious Legal Hours on E-Litigation Downloads. Automate with ReLiti.
              </h1>
              <p className="text-xl text-muted-foreground">
                Instantly automate the tedious 'download now' clicks on E-Litigation. Install ReLiti and reclaim valuable time for critical legal work – it's simple and free.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                  asChild
                >
                  <Link href="https://chrome.google.com/webstore/detail/reliti/your-extension-id" target="_blank">
                    Add ReLiti to Chrome & Save Time Now!
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              {/* Replace with actual video or GIF */}
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
              The Time Sink is Real: Hours Lost in Repetitive Clicks
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Manually downloading court search results from E-Litigation is a significant drain on productivity for legal professionals. The endless clicking steals valuable time that could be spent on analysis, client communication, and strategic thinking. ReLiti is the intelligent Chrome extension engineered by Galleo AI to eliminate this bottleneck. It automates the repetitive clicking, allowing you to retrieve the necessary documents effortlessly and efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-playfair text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Effortless Automation: Watch How ReLiti Works (It's This Simple!)
            </h2>
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
              Unlock Unprecedented Productivity and Reclaim Your Focus
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Icons.refresh className="h-6 w-6" />,
                  title: "Instant Time Savings",
                  description: "Reclaim hours each week by automating a tedious task",
                },
                {
                  icon: <Icons.bot className="h-6 w-6" />,
                  title: "Boost Efficiency",
                  description: "Streamline your workflow and get the data you need faster",
                },
                {
                  icon: <Icons.thumbsUp className="h-6 w-6" />,
                  title: "Reduce Errors & Frustration",
                  description: "Eliminate the manual clicking and potential for mistakes",
                },
                {
                  icon: <Icons.edit className="h-6 w-6" />,
                  title: "Seamless Integration",
                  description: "Works flawlessly within your existing workflow",
                },
                {
                  icon: <Icons.logo className="h-6 w-6" />,
                  title: "Galleo AI Powered",
                  description: "Trust a team dedicated to innovative legal tech solutions",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-lg border bg-card p-6 text-center shadow-sm"
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
              Ready to Reclaim Your Time? Download ReLiti Today - It's Free!
            </h2>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link href="https://chrome.google.com/webstore/detail/reliti/your-extension-id" target="_blank">
                  Add ReLiti to Chrome & Start Saving Now!
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700"
                asChild
              >
                <Link href="https://chrome.google.com/webstore/detail/reliti/your-extension-id" target="_blank">
                  Get ReLiti on the Chrome Web Store
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 