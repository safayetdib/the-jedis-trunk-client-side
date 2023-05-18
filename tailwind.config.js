const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Ubuntu', 'sans-serif'],
			cursive: ['Carter One', 'cursive'],
		},
		extend: {
			colors: {
				dark: {
					800: '#202020',
					900: '#000000',
				},
			},
		},
	},
	plugins: [],
});
