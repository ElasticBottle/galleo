import { Metadata } from "next"
import Link from "next/link"
import { type Content, getAllContent } from "~/lib/mdx"
import { Section } from "../_components/section"
import { SearchInput } from "./_components/search-input"
import { Pagination } from "./_components/pagination"
import { useState } from "react"

export const metadata: Metadata = {
  title: "Insights",
  description: "Explore our collection of insights on the latest developments in IP law, AI, and the intersection of law and AI",
}

function getParam(
  searchParams: { [key: string]: string | string[] | undefined },
  key: string
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
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const articles = await getAllContent('insights')
  // Sort by date descending
  const sorted = [...articles].sort((a, b) =>
    new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  )
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = Array.from(
    new Set(sorted.map((a) => a.metadata.category).filter(Boolean))
  ) as string[]

  // Hero article is the most recent
  const [hero, ...rest] = sorted

  // Filter grid by category if selected
  const gridArticles = selectedCategory
    ? rest.filter((a) => a.metadata.category === selectedCategory)
    : rest

  return (
    <Section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Hero Section */}
        {hero && (
          <section className="w-full mb-12">
            <Link href={`/insights/${hero.slug}`}>
              <div className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer">
                {hero.metadata.image && (
                  <img
                    src={hero.metadata.image}
                    alt={hero.metadata.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-2">
                    {hero.metadata.category}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {hero.metadata.title}
                  </h1>
                  <p className="text-white text-lg line-clamp-2">
                    {hero.metadata.description}
                  </p>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Category Navigation */}
        <nav className="flex gap-2 mb-8 justify-center flex-wrap">
          <button
            className={`px-4 py-2 rounded-full font-medium ${!selectedCategory ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full font-medium ${selectedCategory === cat ? "bg-primary text-white" : "bg-muted text-muted-foreground"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="block rounded-lg border border-border bg-white dark:bg-white/5 hover:shadow-lg transition"
            >
              {article.metadata.image && (
                <img
                  src={article.metadata.image}
                  alt={article.metadata.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
              )}
              <div className="p-4">
                <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded mb-2">
                  {article.metadata.category}
                </span>
                <h2 className="text-lg font-semibold line-clamp-2">
                  {article.metadata.title}
                </h2>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </Section>
  )
}

// Enhanced Article Card Component
function ArticleCard({ article }: { article: Content }) {
  return (
    <Link 
      href={`/insights/${article.slug}`}
      className="group block bg-white dark:bg-white/5 rounded-xl border border-border hover:border-border-hover transition-all duration-300 overflow-hidden hover:shadow-lg"
    >
      <div className="flex flex-col md:flex-row">
        {article.metadata.image && (
          <div className="md:w-1/3 relative">
            <div className="aspect-[4/3] md:aspect-[3/3] relative">
              <img 
                src={article.metadata.image} 
                alt={article.metadata.title}
                className="object-cover absolute inset-0 w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        )}
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wider text-xs font-medium text-primary mb-3">
            {article.metadata.category || "INSIGHTS"}
          </div>
          <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {article.metadata.title}
          </h2>
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {article.metadata.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {article.metadata.author && (
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                {article.metadata.author}
              </span>
            )}
            {article.metadata.date && (
              <time dateTime={article.metadata.date} className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                {new Date(article.metadata.date).toLocaleDateString()}
              </time>
            )}
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {article.metadata.readingTime || "3 min read"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
} 
