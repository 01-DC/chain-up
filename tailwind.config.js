/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				gold: "Goldman, cursive",
			},
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: "#5E50E2",
					secondary: "#c026d3",
					accent: "#F471B5",
					neutral: "#3ABFF8",
					"base-100": "#D5CFFF",
					info: "#0CA6E9",
					success: "#2BD4BD",
					warning: "#F4C152",
					error: "#FB6F84",
					"primary-content": "#ffffff",
					"secondary-content": "#ffffff",
					"neutral-content": "#ffffff",
				},
			},
		],
	},
}
