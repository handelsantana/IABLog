import { Grid } from "@mui/material";
import { NewsItem } from "@/lib/news";
import NewsCard from "./NewsCard";

type RelatedPostsProps = {
  items: NewsItem[];
};

export default function RelatedPosts({ items }: RelatedPostsProps) {
  return (
    <Grid container spacing={3}>
      {items.map((item) => (
        <Grid item key={item.slug} xs={12} md={4}>
          <NewsCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
}
