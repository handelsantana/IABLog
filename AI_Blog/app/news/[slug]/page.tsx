import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  Box,
  Breadcrumbs,
  CardMedia,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContentRenderer from "@/components/ContentRenderer";
import RelatedPosts from "@/components/RelatedPosts";
import SectionHeader from "@/components/SectionHeader";
import TagChips from "@/components/TagChips";
import { formatDate, formatReadingTime } from "@/lib/format";
import { getNewsBySlug, getRelatedNews, news } from "@/lib/news";

type NewsPageProps = {
  params: { slug: string };
};

export const generateMetadata = ({ params }: NewsPageProps) => {
  const item = getNewsBySlug(params.slug);
  if (!item) {
    return {
      title: "Notícia não encontrada",
      description: "Não foi possível encontrar esta notícia.",
    };
  }
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      images: [item.coverImage],
      type: "article",
    },
  };
};

export default function NewsPage({ params }: NewsPageProps) {
  const item = getNewsBySlug(params.slug);
  if (!item) {
    notFound();
  }

  const related = getRelatedNews(item, 3);

  return (
    <Stack spacing={4}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link href="/">Home</Link>
        <Typography color="text.primary">Notícia</Typography>
      </Breadcrumbs>

      <Stack spacing={2}>
        <Typography variant="h2" component="h1">
          {item.title}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {item.subtitle}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
          <Chip label={formatDate(item.date)} size="small" />
          <Stack direction="row" spacing={0.5} alignItems="center">
            <AccessTimeIcon fontSize="inherit" />
            <Typography variant="caption" color="text.secondary">
              {formatReadingTime(item.readingTime)}
            </Typography>
          </Stack>
          <Typography variant="caption" color="text.secondary">
            Por {item.author}
          </Typography>
        </Stack>
        <TagChips tags={item.tags} />
      </Stack>

      <Box
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <CardMedia
          component="img"
          height={420}
          image={item.coverImage}
          alt={item.title}
        />
      </Box>

      <ContentRenderer content={item.content} />

      <Divider sx={{ my: 2 }} />

      <SectionHeader title="Relacionadas" subtitle="Outras matérias recomendadas" />
      <RelatedPosts items={related} />
    </Stack>
  );
}

export const generateStaticParams = async () =>
  news.map((item) => ({ slug: item.slug }));
