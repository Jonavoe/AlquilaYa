import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primario: "#F8D02C",
      text: {
        primario: "#F8D02C",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
export default config;
