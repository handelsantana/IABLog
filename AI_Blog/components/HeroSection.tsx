"use client";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box, Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { NewsItem } from "@/lib/news";
import { formatDate } from "@/lib/format";
import TagChips from "./TagChips";

type HeroSectionProps = {
  item: NewsItem;
};

export default function HeroSection({ item }: HeroSectionProps) {
  return (
    <Box component="section" sx={{ mb: 6 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={2.5}>
            <Typography variant="overline" color="text.secondary">
              Destaque do dia · {formatDate(item.date)}
            </Typography>
            <Typography variant="h2" component="h1">
              {item.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {item.subtitle}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {item.excerpt}
            </Typography>
            <TagChips tags={item.tags} />
            <Stack direction="row" spacing={2} alignItems="center">
              <Button
                component={Link}
                href={`/news/${item.slug}`}
                variant="contained"
                color="secondary"
                endIcon={<ArrowForwardIcon />}
              >
                Ler matéria
              </Button>
              <Typography variant="caption" color="text.secondary">
                Por {item.author}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
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
              image={item.coverImage}
              alt={item.title}
              sx={{ minHeight: 320, objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
