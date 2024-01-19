/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			},
			colors: {
				// Base colors
				white: '#E8E8E8',
				black: '#000000',
				gray: '#767676',

				// Status colors
				success: '#10B981',
				warning: '#FBBF24',
				error: '#DC2626',

				// colors
				red: '#F01402',
				orange: '#F08B02',
				green: '#DEF002',
				purple: '#8B02F0',
				yellow: '#FFED4F',
				lemon: '#02F08B'
			},
			boxShadow: {
				'black-sm': '2px 2px 0px 0px rgba(15,15,15)',
				'black-xl': '15px 15px 0px 0px rgba(15,15,15)',
				black: '5px 5px 0px 0px rgba(15,15,15)',
				'white-xl': '15px 15px 0px 0px rgba(232,229,233)',
				white: '5px 5px 0px 0px rgba(232,229,233)',
				'grey-xl': '15px 15px 0px 0px rgba(64,66,66)',
				grey: '5px 5px 0px 0px rgba(64,66,66)'
			}
		}
	},
	plugins: []
}
