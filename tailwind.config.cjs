const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'blue': '#345FF6',
			'gunmetal': '#253347',
			'dark-electric-blue': '#5E6E85',
			'borders': '#D8E2E7',
			'pure-white': '#FFFFFF'
		},
		fontSize: {
			xl: '4rem',
			l: '3rem',
			m: '1.5rem',
			s: '1.25rem',
			base: '1rem',
			xs: '0.875rem'
		},
		fontFamily: {
			inter: ['Inter Variable', 'sans-serif']
    },
    boxShadow: {
      blueGlow: '16px 32px 56px 0px rgba(143, 174, 207, 0.25);'
    }
	},
	plugins: [
		plugin(({ addUtilities, theme }) => {
			addUtilities({
				'.heading-xl': {
					fontFamily: theme('fontFamily.inter'),
					fontSize: theme('fontSize.xl'),
					fontWeight: '600',
					lineHeight: '4.4rem',
					letterSpacing: '-0.2rem'
				},
				'.heading-l': {
					fontFamily: theme('fontFamily.inter'),
					fontSize: theme('fontSize.l'),
					fontWeight: '600',
					lineHeight: '3.3rem',
					letterSpacing: '-0.15rem'
				},
				'.heading-m': {
					fontFamily: theme('fontFamily.inter'),
					fontSize: theme('fontSize.m'),
					fontWeight: '600',
					letterSpacing: '-0.075rem'
				},
				'.heading-s': {
					fontFamily: theme('fontFamily.inter'),
					fontSize: theme('fontSize.s'),
					fontWeight: '600',
					letterSpacing: '-0.0624rem'
				},
				'.body-m': {
					fontFamily: theme('fontFamily.inter'),
					fontSize: theme('fontSize.base'),
					lineHeight: '1.5rem'
				},
				'.body-s': {
					fontFamily: theme('fontFamily.inter'),
					fontSize: theme('fontSize.xs'),
					lineHeight: '1.3125rem'
				}
			})
		})
	],
}
