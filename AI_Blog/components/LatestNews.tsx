"use client";

import { Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import { NewsItem } from "@/lib/news";
import NewsList from "./NewsList";

type LatestNewsProps = {
  items: NewsItem[];
  initialCount?: number;
  step?: number;
};

export default function LatestNews({
  items,
  initialCount = 6,
  step = 6,
}: LatestNewsProps) {
  const [visible, setVisible] = useState(initialCount);
  const visibleItems = items.slice(0, visible);
  const canLoadMore = visible < items.length;

  return (
    <Stack spacing={3}>
      <NewsList items={visibleItems} />
      {canLoadMore && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            variant="outlined"
            size="large"
            onClick={() => setVisible((prev) => prev + step)}
          >
            Carregar mais
          </Button>
        </Box>
      )}
    </Stack>
  );
}
