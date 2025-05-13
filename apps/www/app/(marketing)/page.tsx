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
      <Spacer className="h-100- md:h-60" />
      <Hero />
      <Spacer className="h-100 md:h-60" />
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
        title={<>5 <span className="text-accent">Hours</span> of Drafting → 5 <span className="text-accent">Seconds</span> with Galleo</>}
        description={
          <div className="space-y-4">
            <p className="font-semibold text-lg">
              Trademark Enquiries? Done.
            </p>
            <p>
              Eliminate manual response drafting completely. Galleo analyzes client trademark inquiries and generates professional, complete responses instantly. Simply review and send.
            </p>
            <div className="space-y-2">
              <p className="font-medium">Every Automated Response Includes:</p>
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
        title={<><span className="text-accent">Effortless</span> drafting, always in your <span className="text-accent">control</span></>}
        description={
          <div className="space-y-4">
            <p className="font-semibold text-lg">
              Your AI Trademark Associate
            </p>
            <p>
              Maintain your quality standards while cutting hours from your workday. Galleo drafts trademark enquiry responses in your firm's style and voice, ensuring consistent client communications. Need adjustments? Simply prompt Galleo to refine any aspect instantly.
            </p>
            <div className="space-y-2">
              <p className="font-medium">Smart Drafting Features:</p>
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
        title={<><span className="text-accent">One Click</span> in Outlook. <span className="text-accent">Full</span> Trademark Response.</>}
        description={
          <div className="space-y-4">
            <p className="font-semibold text-lg">
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

      <FeatureSection
        label="Features"
        title={<>Your data, <span className="text-accent">fully protected</span></>}
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

      <Cta />
      <Spacer className="h-20 md:h-24" />
    </div>
  );
}
