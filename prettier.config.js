/** @type {import("prettier").Options} */
const config = {
  trailingComma: "es5",
  tabWidth: 4,
  semi: true,
  singleQuote: true,
  bracketSameLine: false,
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss"
  ]
};

export default config;
