"use client";

import { Icons } from "@galleo/ui/icon";
import { useTheme } from "@galleo/ui/theme-provider";
import { cn } from "@galleo/ui/utils/cn";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ReLitiPage() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Effect to handle mounting (avoid hydration mismatch)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col bg-primary-bg text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-30"></div>
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-accent opacity-20 blur-3xl"></div>
          <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-accent opacity-10 blur-3xl"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-sans text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
              Click Once. <span className="text-accent font-bold">ReLiti</span> Does <span className="text-accent">The Rest.</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground">
              <span className="text-accent font-semibold">ReLiti</span> automates E-Litigation downloads with one click so you never waste time on mindless clicking again.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="https://chrome.google.com/webstore/detail/reliti/your-extension-id"
                target="_blank"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-button px-8 py-3 text-lg font-medium text-button transition-all duration-300 hover:bg-opacity-90 hover:shadow-accent/50"
              >
                <span className="relative z-10 flex items-center">
                  Get <span className="text-button font-bold mx-2">ReLiti</span> & Reclaim Your Time
                  <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section (now new text) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Turn <span className="text-accent">130+ Clicks</span> Into Just <span className="text-accent">One</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Your billable hours are too valuable for repetitive downloads. <span className="text-accent font-semibold">ReLiti</span> automates court searches so you can focus on high-value legal work instead of mindless clicking. Used by legal professionals to save 40+mins per search and eliminate human error.
            </p>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Section (updated text and icons) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Without ReLiti */}
              <div className="overflow-hidden rounded-2xl border border-sky-300 bg-white dark:bg-[#0A2A40] p-8 transition-all duration-300 hover:shadow-lg">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                  <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="14" stroke="#ef4444" strokeWidth="2.5" fill="#fee2e2" />
                    <text x="16" y="21" textAnchor="middle" fontSize="18" fill="#ef4444" fontWeight="bold">?</text>
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">Without <span className="text-accent font-bold ml-2">ReLiti</span></h3>
                <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/without-reliti.gif"
                    alt="Manual clicking process without ReLiti"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  Repetitive clicking and frustration as you manually download each file one by one. Hours lost in tedious work while critical case analysis waits.
                </p>
              </div>
              {/* With ReLiti */}
              <div className="overflow-hidden rounded-2xl border border-sky-300 bg-white dark:bg-[#0A2A40] p-8 transition-all duration-300 hover:shadow-accent/15">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/30">
                  <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="16" r="14" stroke="#38b6ff" strokeWidth="2.5" fill="#e0f2fe" />
                    <path d="M12.5 16.5L15.5 19.5L20 14" stroke="#38b6ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-foreground">With <span className="text-accent font-bold ml-2">ReLiti</span></h3>
                <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <Image
                    src="/with-reliti.gif"
                    alt="Automated downloading with ReLiti"
                    fill
                    priority
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <p className="text-muted-foreground">
                  One click and <span className="text-accent font-bold mx-2">ReLiti</span> automatically handles all downloads for you. Spend your time on more valuable legal work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stop Clicking. Start Billing. ReLiti Handles the Rest. */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
              Stop <span className="text-accent">Clicking</span>. Start <span className="text-accent">Billing.</span> ReLiti Handles the Rest.
            </h2>
            <div className="mx-auto max-w-xl rounded-2xl border border-sky-300 bg-white dark:bg-[#153048] p-8 text-left shadow-xl">
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3"><span className="mt-1"><svg className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="11" stroke="#38b6ff" strokeWidth="2" fill="#e0f2fe" /><path d="M7 13l3 3 7-7" stroke="#38b6ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Download all 130+ documents with a single click</li>
                <li className="flex items-start gap-3"><span className="mt-1"><svg className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="11" stroke="#38b6ff" strokeWidth="2" fill="#e0f2fe" /><path d="M7 13l3 3 7-7" stroke="#38b6ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Zero risk of missing critical documents</li>
                <li className="flex items-start gap-3"><span className="mt-1"><svg className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="11" stroke="#38b6ff" strokeWidth="2" fill="#e0f2fe" /><path d="M7 13l3 3 7-7" stroke="#38b6ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Complete court searches in minutes, not hours</li>
                <li className="flex items-start gap-3"><span className="mt-1"><svg className="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="11" stroke="#38b6ff" strokeWidth="2" fill="#e0f2fe" /><path d="M7 13l3 3 7-7" stroke="#38b6ff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></span>Seamless integration with your existing E-Litigation workflow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and How to Use Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <span className="text-accent">Free</span> Access, <span className="text-accent">Easy</span> Setup
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Getting started with <span className="text-accent font-semibold mx-2">ReLiti</span> is quick and straightforward. Two simple steps and you're ready to save hours of your valuable time.
            </p>
            
            <div className="mt-14 flex flex-col md:flex-row gap-10 justify-center">
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card-custom p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-accent/15 max-w-sm">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
                <div className="relative z-10">
                  <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                    <div className="relative">
                      <svg className="h-10 w-10 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-button">1</div>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Install</h3>
                  <p className="text-muted-foreground">Download <span className="text-accent font-semibold mx-2">ReLiti</span> from the Chrome Web Store in seconds</p>
                </div>
              </div>
              {/*
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card-custom p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-accent/15">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
                <div className="relative z-10">
                  <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                    <div className="relative">
                      <svg className="h-10 w-10 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-button">2</div>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Sign In</h3>
                  <p className="text-muted-foreground">Connect with your Microsoft account</p>
                </div>
              </div>
              */}
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card-custom p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-accent/15 max-w-sm">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
                <div className="relative z-10">
                  <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                    <div className="relative">
                      <svg className="h-10 w-10 text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-button">2</div>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">Start Using</h3>
                  <p className="text-muted-foreground">Navigate to E-Litigation and enjoy the automation</p>
                </div>
              </div>
            </div>
            
            {/*
            <div className="relative mx-auto mt-14 max-w-lg overflow-hidden rounded-2xl border border-border bg-card-custom p-8 shadow-xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent opacity-5 blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-accent opacity-5 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-foreground">Pricing</h3>
              <div className="mt-6 flex flex-col space-y-8 sm:flex-row sm:items-center sm:justify-around sm:space-y-0">
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">First 2 uses</div>
                  <div className="text-3xl font-bold text-accent">FREE</div>
                </div>
                <div className="hidden h-16 border-l border-border sm:block"></div>
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">After that</div>
                  <div className="text-3xl font-bold text-foreground">$10<span className="text-lg font-normal text-muted-foreground">/month</span></div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-primary-bg p-12 text-center">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ready for the <span className="text-accent">One Click</span> that <span className="text-accent font-bold">Downloads</span> it All?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Join the many legal professionals who've modernized their court search workflow with <span className="text-accent font-semibold mx-2">ReLiti</span>.
            </p>
            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:justify-center">
              <Link
                href="https://chrome.google.com/webstore/detail/reliti/your-extension-id"
                target="_blank"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-button px-8 py-3 text-lg font-medium text-button transition-all duration-300 hover:bg-opacity-90 hover:shadow-accent/50"
              >
                <span className="relative z-10 flex items-center">
                  Get <span className="text-button font-bold mx-2">ReLiti</span> Now
                  <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        :root {
          --primary-bg: #FFFFFF;
          --accent: #038CF7;
          --card-bg: #FFFFFF;
          --button-color: #0469BA;
          --button-text: #FFFFFF;
        }
        
        .dark {
          --primary-bg: #001A33;
          --accent: #038CF7;
          --card-bg: #0A3050;
          --button-color: #05A3F7;
          --button-text: #001C36;
        }
        
        .bg-primary-bg {
          background-color: var(--primary-bg);
        }
        
        .text-primary-bg {
          color: var(--primary-bg);
        }
        
        .text-accent {
          color: var(--accent);
        }
        
        .bg-accent {
          background-color: var(--accent);
        }
        
        .bg-button {
          background-color: var(--button-color);
        }
        
        .text-button {
          color: var(--button-text);
        }
        
        .hover\:shadow-accent\/50:hover {
          box-shadow: 0 0 15px rgba(3, 140, 247, 0.5);
        }
        
        .hover\:shadow-accent\/15:hover {
          box-shadow: 0 0 20px rgba(3, 140, 247, 0.15);
        }
        
        .bg-card-custom {
          background-color: var(--card-bg);
        }
      `}</style>
    </div>
  );
} 
