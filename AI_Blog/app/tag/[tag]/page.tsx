import { Breadcrumbs, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { notFound } from "next/navigation";
import EmptyState from "@/components/EmptyState";
import NewsList from "@/components/NewsList";
import SectionHeader from "@/components/SectionHeader";
import { getNewsByTag, getTags } from "@/lib/news";
import { fromTagSlug, toTagSlug } from "@/lib/tags";

type TagPageProps = {
  params: { tag: string };
};

export const generateMetadata = ({ params }: TagPageProps) => {
  const tags = getTags();
  const tagLabel = fromTagSlug(params.tag, tags) ?? params.tag;
  return {
    title: `Tag: ${tagLabel}`,
    description: `Notícias relacionadas à tag ${tagLabel}.`,
  };
};

export default function TagPage({ params }: TagPageProps) {
  const tags = getTags();
  const tagLabel = fromTagSlug(params.tag, tags);
  if (!tagLabel) {
    notFound();
  }

  const items = getNewsByTag(tagLabel);

  return (
    <Stack spacing={3}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">Home</Link>
        <Typography color="text.primary">Tag</Typography>
        <Typography color="text.primary">{tagLabel}</Typography>
      </Breadcrumbs>

      <SectionHeader
        title={`#${tagLabel}`}
        subtitle={`Encontramos ${items.length} matérias sobre este tema.`}
      />

      {items.length === 0 ? (
        <EmptyState
          title="Nenhuma notícia encontrada"
          description="Tente outra tag ou faça uma busca."
        />
      ) : (
        <NewsList items={items} />
      )}
    </Stack>
  );
}

export const generateStaticParams = async () =>
  getTags().map((tag) => ({ tag: toTagSlug(tag) }));
