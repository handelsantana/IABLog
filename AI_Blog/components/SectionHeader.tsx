import { Box, Stack, Typography } from "@mui/material";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  anchor?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  anchor,
}: SectionHeaderProps) {
  return (
    <Box id={anchor} sx={{ scrollMarginTop: 120 }}>
      <Stack spacing={0.5} sx={{ mb: 3 }}>
        <Typography variant="h4" component="h2">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body1" color="text.secondary">
            {subtitle}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
