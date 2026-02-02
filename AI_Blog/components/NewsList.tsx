import { Grid } from "@mui/material";
import { NewsItem } from "@/lib/news";
import NewsCard from "./NewsCard";

type NewsListProps = {
  items: NewsItem[];
};

export default function NewsList({ items }: NewsListProps) {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item key={item.slug} xs={12} md={6}>
          <NewsCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
