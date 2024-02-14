/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'lora': ['Lora', 'serif']
			},
			backgroundImage: {
				'hero-image': "url('/img/hero.jpg')",
				'dishes': "url(/img/humo.jpg)",
				'gradient-black': "linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%)",
				"testimonial": "linear-gradient(60deg, rgba(24,24,27,1) 50%, rgba(39,39,42,0.3) 100%), url('/img/testimonial.jpg')"
			},
			listStyleImage: {
				checkmark: 'url("/img/check.svg")',
			},
		},
	},
	plugins: [],
}