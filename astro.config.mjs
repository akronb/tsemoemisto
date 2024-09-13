import { defineConfig } from "astro/config"

export default defineConfig({  
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: "en",
    locales: ["uk", "en", "ru", "he"],
  }
})
