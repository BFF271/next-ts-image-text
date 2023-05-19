module.exports = {
	content: [
		'./src/components/**/*.{ts,tsx,js,jsx}',
		'./src/pages/**/*.{ts,tsx,js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				first: '#5fa5cc', // todo test all of these, primary
				second: '#f93d3f', // secondary / danger / red cta
				third: '#d5e9d6', // success / green cta
				fourth: '#fef7ea', // warning / yellow cta
				fifth: '#e6f7fd', // info / blue cta / light primary variant
				sixth: '#f9fefe', // very light primary variant
				'grey-100': '#D9E2EC',
				'grey-200': '#BCCCDC',
				'grey-300': '#9FB3C8',
				'grey-400': '#829AB1',
				'grey-500': '#627D98',
				'grey-600': '#486581',
				'grey-700': '#334E68',
				'grey-800': '#243B53',
				'grey-900': '#102A43',
			},
			fontSize: {
				xxs: '0.7rem',
			},
		},
	},
	variants: {},
	plugins: [],
};
