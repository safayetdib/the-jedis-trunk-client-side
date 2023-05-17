const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		fontFamily: {
			primary: ['Secular One', 'sans-serif'],
			secondary: ['Carter One', 'cursive'],
			accent: ['Monoton', 'cursive'],
		},
	},
	plugins: [],
});
