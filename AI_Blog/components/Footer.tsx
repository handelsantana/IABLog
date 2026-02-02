import { Box, Container, Divider, Link, Stack, Typography } from "@mui/material";

const footerLinks = [
  { label: "Sobre", href: "#" },
  { label: "Contato", href: "#" },
  { label: "Política de Privacidade", href: "#" },
  { label: "RSS", href: "#" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8, pb: 4 }}>
      <Container maxWidth="lg">
        <Divider sx={{ mb: 3 }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Stack direction="row" spacing={2} flexWrap="wrap">
            {footerLinks.map((link) => (
              <Link key={link.label} href={link.href} color="text.secondary">
                {link.label}
              </Link>
            ))}
          </Stack>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} IABlog. Todos os direitos reservados.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
