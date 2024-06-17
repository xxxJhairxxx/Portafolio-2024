/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			primary: "#1c3a9d",
			secondary: "#111418",
			tertiary:"#20C983",
			
			gris: {
			  100: "#6C757D",
			  200: "#F1F3F3",
			  300: "#4c4d53",
			  400: "#606060",
			},
		  },
		  screens: {
			phone: "414px",
			tablet: "768px",
			tabletlg: "960px",
			tabletxl: "1024px",
			laptop: "1200px",
			laptoplg: "1400px",
			desktop: "1700px",
		  },
		},
	  },
	plugins: [],
}
