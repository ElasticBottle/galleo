import { Metadata } from "next"
import Link from "next/link"
import { type Content, getAllContent } from "~/lib/mdx"
import { Section } from "../_components/section"

export const metadata: Metadata = {
  title: "Insights | Galleo",
  description: "Explore our collection of insights about AI, productivity, and legal tech.",
}

export default async function InsightsPage() {
  const insights = await getAllContent('insights')

  return (
    <Section className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex items-baseline justify-between mb-8">
          <h1 className="text-4xl font-bold">Insights</h1>
          <p className="text-muted-foreground">
            A series of articles that will help you understand legal tech
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((article: Content) => (
            <Link 
              key={article.slug} 
              href={`/insights/${article.slug}`}
              className="group block bg-white dark:bg-white/5 rounded-lg border border-border hover:border-border-hover transition-colors overflow-hidden"
            >
              {article.metadata.image && (
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={article.metadata.image} 
                    alt={article.metadata.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="uppercase tracking-wider text-xs text-muted-foreground mb-2">
                  {article.metadata.category || "INSIGHTS"}
                </div>
                <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.metadata.title}
                </h2>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.metadata.description}
                </p>
                <div className="text-sm text-muted-foreground">
                  {article.metadata.readingTime || "3 min read"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  )
} 