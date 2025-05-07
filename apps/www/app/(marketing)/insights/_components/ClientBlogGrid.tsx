"use client";
import Link from "next/link";
import { useState } from "react";
import { type Content } from "~/lib/mdx";

export default function ClientBlogGrid({ articles }: { articles: Content[] }) {
  // Sort by date descending
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = Array.from(
    new Set(sorted.map((a) => a.metadata.category).filter(Boolean))
  ) as string[];

  // Hero article is the most recent
  const [hero, ...rest] = sorted;

  // Filter grid by category if selected
  const gridArticles = selectedCategory
    ? rest.filter((a) => a.metadata.category === selectedCategory)
    : rest;

  return (
    <section className="py-16">
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
            type="button"
            className={`rounded-full px-4 py-2 font-medium ${!selectedCategory ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              type="button"
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
    </section>
  );
}