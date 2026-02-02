"use client";

import { Chip, Stack } from "@mui/material";
import Link from "next/link";
import { toTagSlug } from "@/lib/tags";

type TagChipsProps = {
  tags: string[];
};

export default function TagChips({ tags }: TagChipsProps) {
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
      {tags.map((tag) => (
        <Chip
          key={tag}
          label={tag}
          component={Link}
          href={`/tag/${toTagSlug(tag)}`}
          clickable
          size="small"
          sx={{ mb: 0.5 }}
        />
      ))}
    </Stack>
  );
}
