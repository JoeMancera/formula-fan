/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		extend: {
			colors: {
				// Base colors
				white: '#E8E5E9',
				black: '#0F0F0F',
				gray: '#404242',
				primary: '#E10600',

				// Status colors
				success: '#10B981',
				warning: '#FBBF24',
				error: '#DC2626',

				// CTA colors
				orange: '#EE6300',
				green: '#CBD77D',
				purple: '#6D28D9'
			},
			boxShadow: {
				'black-xl': '15px 15px 0px 0px rgba(15,15,15)',
				'black': '5px 5px 0px 0px rgba(15,15,15)',
				'white-xl': '15px 15px 0px 0px rgba(232,229,233)',
				'white': '5px 5px 0px 0px rgba(232,229,233)',
				'grey-xl': '15px 15px 0px 0px rgba(64,66,66)',
				'grey': '5px 5px 0px 0px rgba(64,66,66)',
			}
		},
	},
	plugins: [],
}
