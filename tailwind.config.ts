import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				spirit: ["Spirit", "Inter", ...defaultTheme.fontFamily.mono],
			},
			colors: {
				"brand-red": "#ff125e",
				"brand-orange": "#ff8e31",
				"brand-green": "#00e54a",
				"brand-blue": "#047eff",
				"brand-violet": "#6900ff",

				"logo-deep-purple": "#8400ff",
				"logo-purple": "#b300ff",
				"logo-blue": "#2b39fe",

				"brand-background": "#0b0d0e",
				"brand-background-secondary": "#161b1d",
				"brand-border": "#21292c",
				"brand-text": "#ffffff",
			},
			borderColor: {
				DEFAULT: "#21292C",
			},
		},
	},
	plugins: [],
} satisfies Config;
