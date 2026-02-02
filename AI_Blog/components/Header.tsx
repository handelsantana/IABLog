"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext, useState } from "react";
import { ColorModeContext } from "@/app/providers";
import SearchBar from "./SearchBar";

const navItems = [
  { label: "Últimas", href: "/#latest" },
  { label: "Em alta", href: "/#trending" },
  { label: "Tags", href: "/#tags" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { mode, toggleMode } = useContext(ColorModeContext);

  return (
    <AppBar position="fixed" elevation={0}>
      <Toolbar sx={{ gap: 2 }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setOpen(true)}
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          aria-label="Abrir menu"
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "secondary.main",
              display: "grid",
              placeItems: "center",
              fontWeight: 700,
            }}
          >
            IA
          </Box>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{ color: "inherit" }}
          >
            IABlog
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", md: "flex" }, ml: 4 }}
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              component={Link}
              href={item.href}
              color="inherit"
              sx={{ fontWeight: 600 }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>

        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <Box sx={{ width: { xs: "100%", md: 340 }, maxWidth: 480 }}>
            <SearchBar />
          </Box>
        </Box>

        <IconButton color="inherit" onClick={toggleMode} aria-label="Alternar tema">
          {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
        </IconButton>
      </Toolbar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Navegação
          </Typography>
          <List>
            {navItems.map((item) => (
              <ListItem key={item.href} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton component={Link} href="/" onClick={() => setOpen(false)}>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
