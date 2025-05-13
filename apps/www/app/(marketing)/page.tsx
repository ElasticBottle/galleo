"use client";
import { Spacer } from "@galleo/ui/components/base/spacer";
import { Cta } from "./_components/cta";
import { AIDrafting } from "./_components/feature/ai-drafting";
import { FeatureSection } from "./_components/feature/container";
import { Email } from "./_components/feature/email";
import { Integrated } from "./_components/feature/integrated";
import { Security } from "./_components/feature/security";
import { Hero } from "./_components/hero";
import { Logos } from "./_components/logos";
import { Section } from "./_components/section";

export default function LandingPage() {
  return (
    <div>
      <Spacer className="h-20 md:h-24" />
      <Hero />
      <Spacer className="h-20 md:h-24" />
      
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Your Trademark Response <span className="text-accent">Powerhouse</span></h2>
          <div className="text-muted-foreground">
            <p>
              Galleo seamlessly integrates into your workflow, transforming client trademark inquiries into revenue opportunities with one-click processing. Our AI analyzes complex trademark scenarios, navigates international regulations, and produces client-ready responses that maintain your firm's voice and expertise.
            </p>
          </div>
        </div>
      </Section>
      
      <Spacer className="h-20 md:h-24" />
      <FeatureSection
        label=""
        title={<>Your Data, <span className="text-accent">Fully Protected</span></>}
        description={
          <div className="space-y-4">
            <p>
              Galleo keeps your information secure with encryption at every
              step. No data storage, no unnecessary access—complete privacy and
              control.
            </p>
            <ul className="ml-0 space-y-3 text-muted-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                End-to-end encryption for all communications
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Zero data storage policy—information isn't retained
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Strict access controls limit data visibility
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Only processes the specific emails you select
              </li>
            </ul>
          </div>
        }
        ctaText=""
        showcaseContent={<Security />}
        position="left"
      />

      <Spacer className="h-20 md:h-24" />

      <Section subtitle={<>Built by <span className="text-accent">IP professionals</span>, powered by <span className="text-accent">AI</span></>}>
        <div className="mx-auto max-w-md text-center text-muted-foreground">
          <p>
            Developed by a specialized team of Silicon Valley AI engineers and experienced IP lawyers who understand exactly how trademark enquiry drafting drains your firm's resources. Galleo transforms how modern IP practices handle their daily trademark workload.
          </p>
        </div>
        <Spacer className="h-8 md:h-10" />
        <Logos />
      </Section>

      <Spacer className="h-20 md:h-24" />
      <FeatureSection
        label=""
        title={<><span className="text-accent"> 5 Hours</span> of Drafting → <span className="text-accent">5 Seconds</span> with Galleo</>}
        description={
          <div className="space-y-4">
            <p className="font-bold text-lg">
              Trademark Enquiries? Done.
            </p>
            <p>
              Eliminate manual response drafting completely. Galleo analyzes client trademark inquiries and generates professional, complete responses instantly. Simply review and send.
            </p>
            <div className="space-y-2">
              <p className="font-bold">Every Automated Response Includes:</p>
              <ul className="ml-0 space-y-3 text-muted-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Client research automatically integrated
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Precise NICE classification recommendations
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Accurate, itemized fee calculations
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Customized follow-up requests tailored to your client
                </li>
              </ul>
            </div>
          </div>
        }
        ctaText=""
        showcaseContent={<Email />}
      />

      <Spacer className="h-20 md:h-24" />

      <FeatureSection
        label=""
        title={<><span className="text-accent">Effortless</span> Drafting, Always in <span className="text-accent">Your Control</span></>}
        description={
          <div className="space-y-4">
            <p className="font-bold text-lg">
              Your AI Trademark Associate
            </p>
            <p>
              Maintain your quality standards while cutting hours from your workday. Galleo drafts trademark enquiry responses in your firm's style and voice, ensuring consistent client communications. Need adjustments? Simply prompt Galleo to refine any aspect instantly.
            </p>
            <div className="space-y-2">
              <p className="font-bold">Smart Drafting Features:</p>
              <ul className="ml-0 space-y-3 text-muted-foreground/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Firm-specific templates and trademark response patterns
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Customizable content that matches your brand voice
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Instant refinements with simple prompts
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1">
                    <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Consistent quality across all trademark communications
                </li>
              </ul>
            </div>
          </div>
        }
        ctaText=""
        showcaseContent={<AIDrafting />}
        position="left"
      />

      <Spacer className="h-20 md:h-24" />

      <FeatureSection
        label=""
        title={<><span className="text-accent">One Click in Outlook</span>. Full Enquiry Response.</>}
        description={
          <div className="space-y-4">
            <p className="font-bold text-lg">
              No New Tools. No Learning Curve.
            </p>
            <p>
              Galleo works directly within Outlook—like having a digital associate handling trademark enquiries instantly, available 24/7.
            </p>
            <ul className="ml-0 space-y-3 text-muted-foreground/80">
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Draft complete trademark responses with one click
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Send finished drafts directly to your Outlook drafts folder
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                Available whenever clients enquire, wherever you work
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                No additional software to install or manage
              </li>
            </ul>
          </div>
        }
        ctaText=""
        showcaseContent={<Integrated />}
      />

      <Spacer className="h-20 md:h-24" />

      <Section subtitle={<>Get Started in <span className="text-accent">3 Simple Steps</span></>}>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border rounded-xl p-8 flex flex-col items-center text-center shadow-sm bg-white dark:bg-slate-900">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent mb-4">
                <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M12 4v12m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round"/><rect x="4" y="18" width="16" height="2" rx="1" fill="currentColor"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Install on Outlook</h3>
              <p className="text-muted-foreground">Add Galleo to your Microsoft Outlook with a simple installation process. No complex setup required.</p>
            </div>
            <div className="border rounded-xl p-8 flex flex-col items-center text-center shadow-sm bg-white dark:bg-slate-900">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent mb-4">
                <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5"/><path d="M16 12H8m4-4v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Login via Microsoft</h3>
              <p className="text-muted-foreground">Securely authenticate with your existing Microsoft account. No new credentials to remember.</p>
            </div>
            <div className="border rounded-xl p-8 flex flex-col items-center text-center shadow-sm bg-white dark:bg-slate-900">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent mb-4">
                <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Start Using</h3>
              <p className="text-muted-foreground">Begin generating trademark responses instantly with a single click. Save hours on your very first day.</p>
            </div>
          </div>
        </div>
      </Section>
      
      <Spacer className="h-20 md:h-24" />

      <Cta />
      <Spacer className="h-20 md:h-24" />
    </div>
  );
}
