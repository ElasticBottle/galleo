"use client";
import Link from "next/link";
import { useState } from "react";
import { type Content } from "~/lib/mdx";

// Category explainers (fill in as needed)
const CATEGORY_EXPLAINERS: Record<string, string> = {
  "AI Legal Developments":
    "Stay informed on the legal frontlines of artificial intelligence. Get the latest on key cases, regulations, and the critical discussions shaping the future of AI's use and governance",
  "Transforming Law with AI":
    "Explore the cutting edge of legal innovation. Learn how AI is revolutionizing legal practice, from automating tasks to creating entirely new ways of delivering services",
  "Trademark Basics":
    "Protect your brand's core identity. Discover essential guides and practical advice on understanding, securing, and managing your trademarks for business success in today's market.",
  // Add more as needed, or use a placeholder:
  // "Other Category": "Description for this category.",
};

export default function ClientBlogGrid({ articles }: { articles: Content[] }) {
  // Sort by date descending
  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  // Get unique categories
  const categories = Array.from(
    new Set(sorted.map((a) => a.metadata.category).filter(Boolean))
  ) as string[];

  // Hero article is the most recent (or most recent in selected category)
  const hero = sorted[0];
  const gridArticles = selectedCategory
    ? sorted.filter((a) => a.metadata.category === selectedCategory)
    : sorted;

  // Pagination
  const ARTICLES_PER_PAGE = 18;
  const totalPages = Math.ceil(gridArticles.length / ARTICLES_PER_PAGE);
  const paginatedArticles = gridArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE
  );

  // Reset to page 1 when category changes
  function handleCategoryChange(cat: string | null) {
    setSelectedCategory(cat);
    setPage(1);
  }

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Insights H1 */}
        <h1 className="text-4xl font-bold mb-8 text-center" style={{ color: 'hsl(var(--primary))' }}>Insights</h1>
        {/* Most Recent Article */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Most Recent Article</h2>
        {hero && (
          <section className="mb-12 w-full">
            <Link href={`/insights/${hero.slug}`}>
              <div className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg">
                {hero.metadata.image && (
                  <img
                    src={hero.metadata.image}
                    alt={hero.metadata.title}
                    className="w-full object-cover"
                    style={{ maxHeight: 400, minHeight: 200 }}
                  />
                )}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4">
                  <span className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-white text-xs">
                    {hero.metadata.category}
                  </span>
                  <h2
                    className="font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-2 break-words whitespace-normal"
                    style={{ wordBreak: "break-word" }}
                  >
                    {hero.metadata.title}
                  </h2>
                  <p className="text-white text-base sm:text-lg line-clamp-2">
                    {hero.metadata.description}
                  </p>
                  <div className="mt-2 text-sm text-white/70">
                    {hero.metadata.readingTime || "3 min read"}
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Categories Signpost */}
        <h2 className="text-xl font-semibold mb-2 text-center py-4">Article Categories</h2>
        <nav className="mb-4 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            className={`rounded-full px-4 py-2 font-medium ${
              !selectedCategory
                ? "bg-primary text-white"
                : "bg-muted text-muted-foreground"
            }`}
            onClick={() => handleCategoryChange(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              className={`rounded-full px-4 py-2 font-medium ${
                selectedCategory === cat
                  ? "bg-primary text-white"
                  : "bg-muted text-muted-foreground"
              }`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Category Explainer */}
        {selectedCategory && (
          <div className="mb-6 text-center text-muted-foreground">
            {CATEGORY_EXPLAINERS[selectedCategory] || (
              <span>
                [Add a description for <b>{selectedCategory}</b> here.]
              </span>
            )}
          </div>
        )}

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
                <h3 className="font-semibold text-lg mb-1">{article.metadata.title}</h3>
                <div className="text-xs text-muted-foreground">
                  {article.metadata.readingTime || "3 min read"}
                </div>
              </div>
            </Link>
          ))}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                type="button"
                className={`px-3 py-1 rounded ${
                  page === i + 1
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground"
                }`}
                onClick={() => setPage(i + 1)}
                // Prevent scroll to top
                style={{ scrollBehavior: "auto" }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}