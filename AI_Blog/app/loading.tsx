import { Grid, Stack } from "@mui/material";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";

export default function Loading() {
  return (
    <Stack spacing={4}>
      <Grid container spacing={3}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Grid item key={index} xs={12} md={6}>
            <NewsCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
