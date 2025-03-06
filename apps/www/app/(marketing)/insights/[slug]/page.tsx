import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getContentBySlug } from "~/lib/mdx"
import { Section } from "../../_components/section"

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const insight = await getContentBySlug('insights', params.slug)
  
  return {
    title: `${insight.metadata.title} | Galleo`,
    description: insight.metadata.description,
  }
}

export default async function InsightPage({ params }: Props) {
  const insight = await getContentBySlug('insights', params.slug)

  return (
    <Section className="py-16">
      <article className="container mx-auto px-4 max-w-3xl">
        <header className="mb-8">
          {insight.metadata.category && (
            <div className="uppercase tracking-wider text-sm text-muted-foreground mb-4">
              {insight.metadata.category}
            </div>
          )}
          <h1 className="text-4xl font-bold mb-4">{insight.metadata.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">
            {insight.metadata.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {insight.metadata.author && (
              <span>{insight.metadata.author}</span>
            )}
            {insight.metadata.date && (
              <time dateTime={insight.metadata.date}>
                {new Date(insight.metadata.date).toLocaleDateString()}
              </time>
            )}
            {insight.metadata.readingTime && (
              <span>{insight.metadata.readingTime}</span>
            )}
          </div>
        </header>

        {insight.metadata.image && (
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-8">
            <img 
              src={insight.metadata.image} 
              alt={insight.metadata.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRemote source={insight.content} />
        </div>
      </article>
    </Section>
  )
} 