"use client";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { NewsItem } from "@/lib/news";
import { formatDate, formatReadingTime } from "@/lib/format";
import TagChips from "./TagChips";

type NewsCardProps = {
  item: NewsItem;
  variant?: "featured" | "compact";
};

export default function NewsCard({ item, variant = "compact" }: NewsCardProps) {
  const isFeatured = variant === "featured";

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Box component={Link} href={`/news/${item.slug}`} aria-label={item.title}>
        <CardMedia
          component="img"
          height={isFeatured ? 360 : 220}
          image={item.coverImage}
          alt={item.title}
          sx={{ objectFit: "cover" }}
        />
      </Box>
      <CardContent sx={{ flex: 1 }}>
        <Stack spacing={1.2}>
          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
            <Chip label={formatDate(item.date)} size="small" />
            <Stack direction="row" spacing={0.5} alignItems="center">
              <AccessTimeIcon fontSize="inherit" />
              <Typography variant="caption" color="text.secondary">
                {formatReadingTime(item.readingTime)}
              </Typography>
            </Stack>
          </Stack>

          <Typography
            variant={isFeatured ? "h3" : "h5"}
            component={Link}
            href={`/news/${item.slug}`}
            color="text.primary"
            sx={{ display: "block" }}
          >
            {item.title}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {item.subtitle}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {item.excerpt}
          </Typography>

          <TagChips tags={item.tags} />

          <Typography variant="caption" color="text.secondary">
            Por {item.author}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
