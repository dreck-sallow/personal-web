import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter Variable', defaultTheme.fontFamily.sans]
			},
			colors: {
				background: 'rgb(var(--color-background))',
				"on-background": 'rgb(var(--color-on-background))',
				"txt": 'rgb(var(--color-txt))',
				"txt-soft": 'rgb(var(--color-txt-soft))',
				primary: 'rgb(var(--color-primary))',
				"background-soft": 'rgb(var(--color-background-soft))',
			}
		},
	},
	plugins: [],
}
