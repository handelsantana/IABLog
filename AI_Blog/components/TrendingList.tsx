"use client";

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { NewsItem } from "@/lib/news";
import { formatDate } from "@/lib/format";

type TrendingListProps = {
  items: NewsItem[];
};

export default function TrendingList({ items }: TrendingListProps) {
  return (
    <List sx={{ p: 0 }}>
      {items.map((item, index) => (
        <ListItem
          key={item.slug}
          disablePadding
          sx={{
            mb: 1.5,
            borderRadius: 3,
            border: "1px solid",
            borderColor: "divider",
            backgroundColor: "background.paper",
            overflow: "hidden",
          }}
        >
          <ListItemButton
            component={Link}
            href={`/news/${item.slug}`}
            sx={{ "&:hover": { boxShadow: 2 } }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "secondary.main",
                  color: "secondary.contrastText",
                  display: "grid",
                  placeItems: "center",
                  fontWeight: 700,
                }}
              >
                {index + 1}
              </Box>
              <ListItemText
                primary={
                  <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                }
                secondary={
                  <Stack direction="row" spacing={1} alignItems="center">
                    <TrendingUpIcon fontSize="inherit" />
                    <Typography variant="caption" color="text.secondary">
                      {formatDate(item.date)}
                    </Typography>
                  </Stack>
                }
              />
            </Stack>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
