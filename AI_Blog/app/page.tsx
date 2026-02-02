import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import HeroSection from "@/components/HeroSection";
import LatestNews from "@/components/LatestNews";
import SectionHeader from "@/components/SectionHeader";
import TagChips from "@/components/TagChips";
import TrendingList from "@/components/TrendingList";
import { getAllNews, getFeaturedNews, getTags, getTrendingNews } from "@/lib/news";

export default function Home() {
  const featured = getFeaturedNews();
  const latest = getAllNews().filter((item) => item.slug !== featured.slug);
  const trending = getTrendingNews(5);
  const tags = getTags();

  return (
    <Stack spacing={6}>
      <HeroSection item={featured} />

      <Grid container spacing={4} alignItems="flex-start">
        <Grid item xs={12} md={8}>
          <SectionHeader
            title="Últimas notícias"
            subtitle="Atualizações diárias sobre IA, pesquisa e produtos."
            anchor="latest"
          />
          <LatestNews items={latest} />
        </Grid>

        <Grid item xs={12} md={4}>
          <SectionHeader
            title="Em alta"
            subtitle="Os temas que estão dominando o ecossistema."
            anchor="trending"
          />
          <TrendingList items={trending} />

          <Box sx={{ mt: 5 }} id="tags">
            <SectionHeader
              title="Tags populares"
              subtitle="Explore assuntos com um clique."
            />
            <Paper sx={{ p: 2 }}>
              <TagChips tags={tags} />
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <Box>
        <Typography variant="body2" color="text.secondary">
          Atualizado diariamente com foco em IA aplicada, inovação e impacto no
          mercado.
        </Typography>
      </Box>
    </Stack>
  );
}
