"use client";

import { Icons } from "@galleo/ui/icon";
import { cn } from "@galleo/ui/utils/cn";
import Image from "next/image";
import Link from "next/link";

// Logo component for consistent branding
const ReLitiLogo = ({ className = "", size = "normal" }: { className?: string; size?: "small" | "normal" | "large" }) => {
  const sizeClasses = {
    small: "h-5",
    normal: "h-7",
    large: "h-10"
  };
  
  return (
    <span className={cn("inline-block align-text-bottom", className)}>
      <Image 
        src="/ReLiti.png" 
        alt="ReLiti Logo" 
        width={size === "large" ? 100 : size === "normal" ? 70 : 50}
        height={size === "large" ? 38 : size === "normal" ? 26 : 19}
        className={cn(sizeClasses[size], "object-contain translate-y-[0.05em]")}
      />
    </span>
  );
};

export default function ReLitiPage() {
  return (
    <div className="flex flex-col bg-[#0A1929] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-30"></div>
          <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-[#00CCFF] opacity-20 blur-3xl"></div>
          <div className="absolute right-20 top-40 h-72 w-72 rounded-full bg-[#00CCFF] opacity-10 blur-3xl"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-sans text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
              Click Once. <ReLitiLogo size="large" className="mx-1 -mb-1 inline-block" /> Does <span className="text-[#00CCFF]">The Rest.</span>
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-gray-300">
              <ReLitiLogo size="small" className="mr-1 inline-block" /> automates E-Litigation downloads with one click so you never waste time on mindless clicking again.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="https://chrome.google.com/webstore/detail/reliti/your-extension-id"
                target="_blank"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-[#00CCFF] px-8 py-3 text-lg font-medium text-[#0A1929] transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(0,204,255,0.5)]"
              >
                <span className="relative z-10 flex items-center">
                  Get <ReLitiLogo size="small" className="mx-1" /> & Reclaim Your Time
                  <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Valuable time, <span className="text-[#00CCFF]">squandered clicking.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Every hour spent manually clicking on E-Litigation is an hour taken away from crucial legal work. 
              As a junior lawyer or paralegal, your time and skills are better spent on analysis and case preparation 
              than repetitive downloading tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Without ReLiti */}
              <div className="overflow-hidden rounded-2xl border border-gray-700 bg-[#121F2E] p-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#4A3A3A]">
                  <svg className="h-8 w-8 text-[#FF6B6B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 9C9 5.5 14.5 5.5 14.5 9C14.5 11.5 12 11 12 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18.01L12.01 17.9989" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">Without <span className="text-[#00CCFF]"><ReLitiLogo className="ml-1 -mr-1 inline-block" /></span></h3>
                <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-[#1A2734]">
                  {/* Replace with actual GIF */}
                  <Image
                    src="/without-reliti.gif"
                    alt="Manual clicking process without ReLiti"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-300">
                  Repetitive clicking and frustration as you manually download each file. Hours lost in tedious work while critical case analysis waits.
                </p>
              </div>
              
              {/* With ReLiti */}
              <div className="overflow-hidden rounded-2xl border border-[#00CCFF]/30 bg-[#121F2E] p-8 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,204,255,0.15)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00CCFF]/20">
                  <svg className="h-8 w-8 text-[#00CCFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="mb-3 text-2xl font-bold text-white">With <span className="text-[#00CCFF]"><ReLitiLogo className="ml-1 -mr-1 inline-block" /></span></h3>
                <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-[#1A2734]">
                  {/* Replace with actual GIF */}
                  <Image
                    src="/with-reliti.gif"
                    alt="Automated downloading with ReLiti"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-300">
                  One click and <span className="text-[#00CCFF]"><ReLitiLogo size="small" className="mx-0.5 inline-block" /></span> automatically handles all downloads for you. Spend your time on what matters most - legal analysis and case preparation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and How to Use Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Simple <span className="text-[#00CCFF]">Pricing.</span> Easy <span className="text-[#00CCFF]">Setup.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Getting started with <span className="text-[#00CCFF]"><ReLitiLogo size="small" className="mx-0.5 inline-block" /></span> is quick and straightforward. Three simple steps and you're ready to save hours of your valuable time.
            </p>
            
            <div className="mt-14 grid gap-10 sm:grid-cols-3">
              <div className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-[#121F2E] p-8 transition-all duration-300 hover:border-[#00CCFF]/50 hover:shadow-[0_0_20px_rgba(0,204,255,0.15)]">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#00CCFF] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
                <div className="relative z-10">
                  <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00CCFF]/10">
                    <div className="relative">
                      <svg className="h-10 w-10 text-[#00CCFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00CCFF] text-xs font-bold text-[#0A1929]">1</div>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">Install</h3>
                  <p className="text-gray-300">Download <ReLitiLogo size="small" className="mx-0.5 inline-block" /> from the Chrome Web Store in seconds</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-[#121F2E] p-8 transition-all duration-300 hover:border-[#00CCFF]/50 hover:shadow-[0_0_20px_rgba(0,204,255,0.15)]">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#00CCFF] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
                <div className="relative z-10">
                  <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00CCFF]/10">
                    <div className="relative">
                      <svg className="h-10 w-10 text-[#00CCFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00CCFF] text-xs font-bold text-[#0A1929]">2</div>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">Sign In</h3>
                  <p className="text-gray-300">Connect with your Microsoft account</p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-2xl border border-gray-700 bg-[#121F2E] p-8 transition-all duration-300 hover:border-[#00CCFF]/50 hover:shadow-[0_0_20px_rgba(0,204,255,0.15)]">
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#00CCFF] opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-20"></div>
                <div className="relative z-10">
                  <div className="mb-6 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#00CCFF]/10">
                    <div className="relative">
                      <svg className="h-10 w-10 text-[#00CCFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <div className="absolute -top-1 -left-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#00CCFF] text-xs font-bold text-[#0A1929]">3</div>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">Start Using</h3>
                  <p className="text-gray-300">Navigate to E-Litigation and enjoy the automation</p>
                </div>
              </div>
            </div>
            
            <div className="relative mx-auto mt-14 max-w-lg overflow-hidden rounded-2xl border border-gray-700 bg-[#121F2E] p-8 shadow-xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#00CCFF] opacity-5 blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 h-40 w-40 rounded-full bg-[#00CCFF] opacity-5 blur-3xl"></div>
              <h3 className="text-2xl font-bold text-white">Pricing</h3>
              <div className="mt-6 flex flex-col space-y-8 sm:flex-row sm:items-center sm:justify-around sm:space-y-0">
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">First 2 uses</div>
                  <div className="text-3xl font-bold text-[#00CCFF]">FREE</div>
                </div>
                <div className="hidden h-16 border-l border-gray-700 sm:block"></div>
                <div className="text-center">
                  <div className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-400">After that</div>
                  <div className="text-3xl font-bold text-white">$10<span className="text-lg font-normal text-gray-400">/month</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One Click to Automation Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
              One Click to <span className="text-[#00CCFF]">Automation.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Experience the value of automation with these key benefits designed for legal professionals:
            </p>
            
            <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-[#121F2E] to-[#182635] p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,204,255,0.15)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00CCFF]/10">
                  <svg className="h-8 w-8 text-[#00CCFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#00CCFF] transition-colors duration-300">Reclaim Hours</h3>
                <p className="text-gray-300">Save valuable time for meaningful legal work instead of mindless clicking</p>
              </div>
              
              <div className="group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-[#121F2E] to-[#182635] p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,204,255,0.15)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00CCFF]/10">
                  <svg className="h-8 w-8 text-[#00CCFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#00CCFF] transition-colors duration-300">Eliminate Tedium</h3>
                <p className="text-gray-300">No more repetitive manual downloads that drain your energy and focus</p>
              </div>
              
              <div className="group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-[#121F2E] to-[#182635] p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,204,255,0.15)]">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#00CCFF]/10">
                  <svg className="h-8 w-8 text-[#00CCFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white group-hover:text-[#00CCFF] transition-colors duration-300">Ensure Accuracy</h3>
                <p className="text-gray-300">Automated processes eliminate human error and ensure consistent results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-gradient-to-br from-[#00CCFF]/20 to-transparent p-12 text-center">
            <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-10">
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#00CCFF] blur-3xl"></div>
              <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#00CCFF] blur-3xl"></div>
            </div>
            <h2 className="font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Ready to Click Less?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-gray-300">
              Join other legal professionals who've reclaimed hours of their workday with <ReLitiLogo size="small" className="mx-0.5 inline-block" />'s automation.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="https://chrome.google.com/webstore/detail/reliti/your-extension-id"
                target="_blank"
                className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-md bg-[#00CCFF] px-8 py-3 text-lg font-medium text-[#0A1929] transition-all duration-300 hover:bg-opacity-90 hover:shadow-[0_0_15px_rgba(0,204,255,0.5)]"
              >
                <span className="relative z-10 flex items-center">
                  Get <ReLitiLogo size="small" className="mx-0.5" /> Now
                  <svg className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 