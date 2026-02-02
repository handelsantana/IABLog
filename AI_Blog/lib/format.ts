export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(date));

export const formatReadingTime = (minutes: number) =>
  `${minutes} min de leitura`;
