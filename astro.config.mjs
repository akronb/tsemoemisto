import { defineConfig } from "astro/config"

export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["uk", "en", "ru", "he"],
  }
})
