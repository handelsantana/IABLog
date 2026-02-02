"use client";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type SearchBarProps = {
  initialQuery?: string;
  placeholder?: string;
  size?: "small" | "medium";
};

export default function SearchBar({
  initialQuery = "",
  placeholder = "Buscar notícias, temas, tags...",
  size = "small",
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const router = useRouter();
  const trimmed = useMemo(() => query.trim(), [query]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        size={size}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholder}
        aria-label="Buscar notícias"
        sx={{
          minWidth: { xs: "100%", md: 280 },
          backgroundColor: "background.paper",
          borderRadius: 999,
          "& .MuiOutlinedInput-root": {
            borderRadius: 999,
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton type="submit" aria-label="Pesquisar">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
}
