import { Box, Stack, Typography } from "@mui/material";
import EmptyState from "@/components/EmptyState";
import NewsList from "@/components/NewsList";
import SearchBar from "@/components/SearchBar";
import SectionHeader from "@/components/SectionHeader";
import { searchNews } from "@/lib/news";

type SearchPageProps = {
  searchParams: { q?: string };
};

export const generateMetadata = ({ searchParams }: SearchPageProps) => ({
  title: searchParams.q ? `Busca: ${searchParams.q}` : "Busca",
  description: "Resultados de busca no IABlog.",
});

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q ?? "";
  const results = query ? searchNews(query) : [];

  return (
    <Stack spacing={3}>
      <SectionHeader
        title="Busca"
        subtitle="Encontre notícias por temas, títulos e tags."
      />
      <Box sx={{ maxWidth: 480 }}>
        <SearchBar initialQuery={query} size="medium" />
      </Box>
      {query ? (
        results.length > 0 ? (
          <NewsList items={results} />
        ) : (
          <EmptyState
            title="Nenhum resultado encontrado"
            description={`Não encontramos notícias para "${query}".`}
          />
        )
      ) : (
        <EmptyState
          title="Digite uma palavra-chave"
          description="Você pode buscar por LLMs, agentes, pesquisa, hardware e mais."
        />
      )}
      {query && (
        <Typography variant="caption" color="text.secondary">
          {results.length} resultado(s) encontrados.
        </Typography>
      )}
    </Stack>
  );
}
