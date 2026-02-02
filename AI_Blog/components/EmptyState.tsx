import SearchOffIcon from "@mui/icons-material/SearchOff";
import { Box, Stack, Typography } from "@mui/material";

type EmptyStateProps = {
  title: string;
  description: string;
};

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Box
      sx={{
        border: "1px dashed",
        borderColor: "divider",
        borderRadius: 4,
        p: 4,
        textAlign: "center",
        backgroundColor: "background.paper",
      }}
    >
      <Stack spacing={1.5} alignItems="center">
        <SearchOffIcon fontSize="large" />
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Stack>
    </Box>
  );
}
