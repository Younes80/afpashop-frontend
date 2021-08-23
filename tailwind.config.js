module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				greenAfpa: '#44a33d',
			},
		},
		container: {
			center: true,
			padding: {
				defaut: '1rem',
				md: '2rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
