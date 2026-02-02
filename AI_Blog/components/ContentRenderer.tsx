import { Box, List, ListItem, Typography } from "@mui/material";
import { ContentBlock } from "@/lib/news";

type ContentRendererProps = {
  content: ContentBlock[];
};

export default function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <Box sx={{ display: "grid", gap: 2 }}>
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            return (
              <Typography key={index} variant="h5" component="h2" sx={{ mt: 2 }}>
                {block.text}
              </Typography>
            );
          case "list":
            return (
              <List key={index} sx={{ pl: 2, listStyle: "disc" }}>
                {block.items.map((item) => (
                  <ListItem
                    key={item}
                    sx={{ display: "list-item", py: 0.5 }}
                  >
                    <Typography variant="body1">{item}</Typography>
                  </ListItem>
                ))}
              </List>
            );
          case "quote":
            return (
              <Box
                key={index}
                component="blockquote"
                sx={{
                  borderLeft: "4px solid",
                  borderColor: "secondary.main",
                  pl: 2,
                  py: 1,
                  backgroundColor: "action.hover",
                  borderRadius: 2,
                }}
              >
                <Typography variant="body1" sx={{ fontStyle: "italic" }}>
                  “{block.text}”
                </Typography>
                {block.cite && (
                  <Typography variant="caption" color="text.secondary">
                    — {block.cite}
                  </Typography>
                )}
              </Box>
            );
          case "paragraph":
          default:
            return (
              <Typography key={index} variant="body1" color="text.secondary">
                {block.text}
              </Typography>
            );
        }
      })}
    </Box>
  );
}
