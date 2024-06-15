import { css } from '@linaria/core'

// Global-CSS
css`
	:global() {
		@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
		* {
			box-sizing: border-box;
			margin: 0px;
			padding: 0px;
			font-family: 'Fira Sans', sans-serif;
			font-weight: 400;
			font-style: normal;
		}
		#root {
			height: 100vh;
			background-color: ${color.black[500]};
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
`
// Theme
export const color = {
	red: {
		100: '#fee6e3',
		200: '#fdccc7',
		300: '#fcb3aa',
		400: '#fb998e',
		500: '#fa8072',
		600: '#c8665b',
		700: '#964d44',
		800: '#64332e',
		900: '#321a17',
	},
	green: {
		100: '#dcf4e4',
		200: '#b9e9c9',
		300: '#96deae',
		400: '#73d393',
		500: '#50c878',
		600: '#40a060',
		700: '#307848',
		800: '#205030',
		900: '#102818',
	},
	blue: {
		100: '#d9e1f9',
		200: '#b3c3f3',
		300: '#8da5ed',
		400: '#6787e7',
		500: '#4169e1',
		600: '#3454b4',
		700: '#273f87',
		800: '#1a2a5a',
		900: '#0d152d',
	},
	black: {
		100: '#d4d4d5',
		200: '#a9a9aa',
		300: '#7e7e80',
		400: '#535355',
		500: '#28282b',
		600: '#202022',
		700: '#18181a',
		800: '#101011',
		900: '#080809',
	},
	white: {
		100: '#fefefd',
		200: '#fdfdfb',
		300: '#fcfbfa',
		400: '#fbfaf8',
		500: '#faf9f6',
		600: '#c8c7c5',
		700: '#969594',
		800: '#646462',
		900: '#323231',
	},
	silver: '#c6c6c7',
}
