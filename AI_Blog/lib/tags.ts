export const toTagSlug = (tag: string) =>
  tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export const fromTagSlug = (slug: string, tags: string[]) => {
  const normalized = slug.toLowerCase();
  return tags.find((tag) => toTagSlug(tag) === normalized) ?? null;
};
