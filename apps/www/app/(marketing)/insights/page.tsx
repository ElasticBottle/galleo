import { Metadata } from "next"
import Link from "next/link"
import { type Content, getAllContent } from "~/lib/mdx"
import { Section } from "../_components/section"
import { SearchInput } from "./_components/search-input"
import { Pagination } from "./_components/pagination"

export const metadata: Metadata = {
  title: "Insights",
  description: "Explore our collection of insights on the latest developments in IP law, AI, and the intersection of law and AI",
}

export default async function InsightsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const insights = await getAllContent('insights')
  const searchQuery = searchParams.q as string | undefined
  const recentPage = Number(searchParams.recentPage) || 1
  const categoryPage = Number(searchParams.categoryPage) || 1
  const itemsPerPage = 3

  // Filter insights based on search query
  const filteredInsights = searchQuery
    ? insights.filter(
        (article) =>
          article.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.metadata.category?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : insights

  // Get unique categories
  const categories = Array.from(
    new Set(filteredInsights.map((article) => article.metadata.category))
  ).filter(Boolean) as string[]

  // Get recent articles
  const recentArticles = filteredInsights.slice(
    (recentPage - 1) * itemsPerPage,
    recentPage * itemsPerPage
  )

  // Get articles by category
  const articlesByCategory = categories.reduce((acc, category) => {
    const categoryArticles = filteredInsights.filter(
      (article) => article.metadata.category === category
    )
    acc[category] = categoryArticles.slice(
      (categoryPage - 1) * itemsPerPage,
      categoryPage * itemsPerPage
    )
    return acc
  }, {} as Record<string, Content[]>)

  return (
    <Section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex items-baseline justify-between mb-12">
          <h1 className="text-4xl font-bold">Insights</h1>
          <p className="text-muted-foreground">
            Explore our collection of insights on the latest developments in IP law, AI, and the intersection of law and AI
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-12">
          <SearchInput />
        </div>

        {/* Recent Articles Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Recent Articles</h2>
          <div className="grid gap-8">
            {recentArticles.map((article: Content) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <Pagination
            currentPage={recentPage}
            totalItems={filteredInsights.length}
            itemsPerPage={itemsPerPage}
            baseUrl="/insights"
            pageParam="recentPage"
          />
        </div>

        {/* Category Sections */}
        {categories.map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">{category}</h2>
            <div className="grid gap-8">
              {articlesByCategory[category].map((article: Content) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            <Pagination
              currentPage={categoryPage}
              totalItems={filteredInsights.filter(
                (article) => article.metadata.category === category
              ).length}
              itemsPerPage={itemsPerPage}
              baseUrl="/insights"
              pageParam="categoryPage"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}

// Article Card Component
function ArticleCard({ article }: { article: Content }) {
  return (
    <Link 
      href={`/insights/${article.slug}`}
      className="group block bg-white dark:bg-white/5 rounded-lg border border-border hover:border-border-hover transition-colors overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        {article.metadata.image && (
          <div className="md:w-1/3 relative">
            <div className="aspect-[4/3] md:aspect-[3/3] relative">
              <img 
                src={article.metadata.image} 
                alt={article.metadata.title}
                className="object-cover absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        )}
        <div className="p-8 md:w-2/3">
          <div className="uppercase tracking-wider text-xs text-muted-foreground mb-3">
            {article.metadata.category || "INSIGHTS"}
          </div>
          <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {article.metadata.title}
          </h2>
          <p className="text-muted-foreground mb-6 line-clamp-2">
            {article.metadata.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {article.metadata.author && (
              <span>{article.metadata.author}</span>
            )}
            {article.metadata.date && (
              <time dateTime={article.metadata.date}>
                {new Date(article.metadata.date).toLocaleDateString()}
              </time>
            )}
            <span>{article.metadata.readingTime || "3 min read"}</span>
          </div>
        </div>
      </div>
    </Link>
  )
} 
