"use client";

import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Stack spacing={2} alignItems="flex-start">
      <Typography variant="h3">Página não encontrada</Typography>
      <Typography variant="body1" color="text.secondary">
        A notícia ou página que você procura não existe ou foi movida.
      </Typography>
      <Button component={Link} href="/" variant="contained" color="secondary">
        Voltar para a home
      </Button>
    </Stack>
  );
}
