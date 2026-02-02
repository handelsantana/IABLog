import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background:
          "radial-gradient(circle at top, rgba(228, 88, 39, 0.08), transparent 55%), radial-gradient(circle at 30% 20%, rgba(12, 59, 71, 0.15), transparent 40%)",
      }}
    >
      <Header />
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          flex: 1,
          pt: { xs: 10, sm: 12 },
          pb: { xs: 6, sm: 8 },
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
}
