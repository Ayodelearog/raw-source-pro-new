import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"rsp-blue": "#000BE1",
				"rsp-green": "#00CD0E",
				"rsp-gray": "#101010",
				"rsp-white": "#FFFFFF",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-lato)"],
				display: ["var(--font-bebas-neue)"],
			},
			// background: "var(--background)",
			// foreground: "var(--foreground)",
		},
	},

	plugins: [],
};
export default config;
