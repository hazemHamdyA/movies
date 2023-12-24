export const navbarItems = [
  {
    path: "/",
    icon: "i-ph-house",
    iconActive: "i-ph-house-fill",
    name: "Home",
  },
  {
    path: "/movie",
    icon: "i-ph-film-strip",
    iconActive: "i-ph-film-strip-fill",
    name: "Movies",
  },
  {
    path: "/tv",
    icon: "i-ph-television-simple",
    iconActive: "i-ph-television-simple-fill",
    name: "TV Shows",
  },
  {
    path: "/search",
    icon: "i-ph-magnifying-glass",
    iconActive: "i-ph-magnifying-glass-fill",
    name: "Search",
  },
];

export const movieDetails = [
  { name: "Released", key: "release_date" },
  { name: "Runtime", key: "runtime" },
  { name: "Directo", key: "credits", link: true },
  { name: "Budget", key: "budget" },
  { name: "Revenue", key: "revenue" },
  { name: "Genre", key: "genres", link: true },
  { name: "Status", key: "status" },
  { name: "Language", key: "original_language" },
  { name: "Production", key: "production_companies" },
];
