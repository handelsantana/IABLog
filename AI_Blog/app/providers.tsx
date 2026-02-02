"use client";

import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
  useMediaQuery,
} from "@mui/material";
import { createContext, useEffect, useMemo, useState } from "react";

type ColorMode = "light" | "dark";

type ColorModeContextValue = {
  mode: ColorMode;
  toggleMode: () => void;
};

export const ColorModeContext = createContext<ColorModeContextValue>({
  mode: "light",
  toggleMode: () => {},
});

const STORAGE_KEY = "iablog-color-mode";

export default function Providers({ children }: { children: React.ReactNode }) {
  const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState<ColorMode>("light");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as ColorMode | null;
    if (stored) {
      setMode(stored);
      return;
    }
    setMode(prefersDark ? "dark" : "light");
  }, [prefersDark]);

  const colorMode = useMemo(
    () => ({
      mode,
      toggleMode: () => {
        setMode((prev) => {
          const next = prev === "light" ? "dark" : "light";
          window.localStorage.setItem(STORAGE_KEY, next);
          return next;
        });
      },
    }),
    [mode],
  );

  const theme = useMemo(() => {
    let baseTheme = createTheme({
      palette: {
        mode,
        primary: {
          main: "#0C3B47",
          light: "#1D6B7A",
          dark: "#06252C",
          contrastText: "#F8FAFC",
        },
        secondary: {
          main: "#E45827",
          light: "#FF7A4D",
          dark: "#B33D18",
          contrastText: "#FFFFFF",
        },
        background: {
          default: mode === "light" ? "#F6F5F2" : "#0E1318",
          paper: mode === "light" ? "#FFFFFF" : "#131B23",
        },
      },
      shape: {
        borderRadius: 16,
      },
      typography: {
        fontFamily: "var(--font-body)",
        h1: {
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        },
        h2: {
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
        },
        h3: {
          fontFamily: "var(--font-display)",
          fontWeight: 700,
        },
        h4: {
          fontFamily: "var(--font-display)",
          fontWeight: 700,
        },
        h5: {
          fontFamily: "var(--font-display)",
          fontWeight: 600,
        },
        subtitle1: {
          fontWeight: 600,
        },
        button: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
      components: {
        MuiAppBar: {
          styleOverrides: {
            root: {
              backgroundImage:
                mode === "light"
                  ? "linear-gradient(90deg, #0C3B47 0%, #0C3B47 40%, #124B58 100%)"
                  : "linear-gradient(90deg, #0B1217 0%, #0B1217 40%, #0F1A22 100%)",
            },
          },
        },
        MuiChip: {
          styleOverrides: {
            root: {
              borderRadius: 999,
              fontWeight: 600,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 20,
              boxShadow:
                mode === "light"
                  ? "0 12px 30px rgba(15, 23, 42, 0.08)"
                  : "0 12px 30px rgba(0, 0, 0, 0.4)",
            },
          },
        },
      },
    });

    baseTheme = responsiveFontSizes(baseTheme);
    return baseTheme;
  }, [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
