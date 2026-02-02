import { Card, CardContent, Skeleton, Stack } from "@mui/material";

export default function NewsCardSkeleton() {
  return (
    <Card>
      <Skeleton variant="rectangular" height={220} />
      <CardContent>
        <Stack spacing={1.2}>
          <Skeleton width="40%" />
          <Skeleton width="80%" height={32} />
          <Skeleton width="70%" />
          <Skeleton width="90%" />
        </Stack>
      </CardContent>
    </Card>
  );
}
