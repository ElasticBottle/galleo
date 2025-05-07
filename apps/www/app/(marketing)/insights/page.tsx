import type { Metadata } from "next";
import Link from "next/link";
import { type Content, getAllContent } from "~/lib/mdx";
import { Section } from "../_components/section";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore our collection of insights on the latest developments in IP law, AI, and the intersection of law and AI",
};

function getParam(
  searchParams: { [key: string]: string | string[] | undefined },
  key: string,
): string | undefined {
  if (typeof (searchParams as any).get === "function") {
    return (searchParams as any).get(key);
  }
  const val = searchParams[key];
  if (Array.isArray(val)) return val[0];
  return val;
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const articles = await getAllContent("insights");
  // Sort by date descending
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime(),
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(
    new Set(sorted.map((a) => a.metadata.category).filter(Boolean)),
  ) as string[];

  // Hero article is the most recent
  const [hero, ...rest] = sorted;

  // Filter grid by category if selected
  const gridArticles = selectedCategory
    ? rest.filter((a) => a.metadata.category === selectedCategory)
    : rest;

  return (
    <Section className="py-16">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Hero Section */}
        {hero && (
          <section className="mb-12 w-full">
            <Link href={`/insights/${hero.slug}`}>
              <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg">
                {hero.metadata.image && (
                  <img
                    src={hero.metadata.image}
                    alt={hero.metadata.title}
                    className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
                <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-white text-xs">
                    {hero.metadata.category}
                  </span>
                  <h1 className="mb-2 font-bold text-3xl text-white md:text-4xl">
                    {hero.metadata.title}
                  </h1>
                  <p className="line-clamp-2 text-lg text-white">
                    {hero.metadata.description}
                  </p>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Category Navigation */}
        <nav className="mb-8 flex flex-wrap justify-center gap-2">
          <button
            className={`rounded-full px-4 py-2 font-medium ${!selectedCategory ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-2 font-medium ${selectedCategory === cat ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Article Grid */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {gridArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="block rounded-lg border border-border bg-white transition hover:shadow-lg dark:bg-white/5"
            >
              {article.metadata.image && (
                <img
                  src={article.metadata.image}
                  alt={article.metadata.title}
                  className="h-40 w-full rounded-t-lg object-cover"
                />
              )}
              <div className="p-4">
                <span className="mb-2 inline-block rounded bg-primary/10 px-2 py-1 text-primary text-xs">
                  {article.metadata.category}
                </span>
                <h2 className="line-clamp-2 font-semibold text-lg">
                  {article.metadata.title}
                </h2>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Section>
  );
}

// Enhanced Article Card Component
function ArticleCard({ article }: { article: Content }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group block overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:border-border-hover hover:shadow-lg dark:bg-white/5"
    >
      <div className="flex flex-col md:flex-row">
        {article.metadata.image && (
          <div className="relative md:w-1/3">
            <div className="relative aspect-[4/3] md:aspect-[3/3]">
              <img
                src={article.metadata.image}
                alt={article.metadata.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        )}
        <div className="p-8 md:w-2/3">
          <div className="mb-3 font-medium text-primary text-xs uppercase tracking-wider">
            {article.metadata.category || "INSIGHTS"}
          </div>
          <h2 className="mb-3 line-clamp-2 font-semibold text-2xl transition-colors group-hover:text-primary">
            {article.metadata.title}
          </h2>
          <p className="mb-6 line-clamp-2 text-muted-foreground">
            {article.metadata.description}
          </p>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            {article.metadata.author && (
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {article.metadata.author}
              </span>
            )}
            {article.metadata.date && (
              <time
                dateTime={article.metadata.date}
                className="flex items-center gap-2"
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {new Date(article.metadata.date).toLocaleDateString()}
              </time>
            )}
            <span className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {article.metadata.readingTime || "3 min read"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
