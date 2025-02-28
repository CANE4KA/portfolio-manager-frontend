import { Config } from 'tailwindcss'

import { COLORS } from './src/constants/color.constants'

const config: Config = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: COLORS
		}
	},
	plugins: []
}

export default config
