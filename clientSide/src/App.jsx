import { css, cx } from '@linaria/core'
import { styled } from '@linaria/react'
import { color } from './theme.style'

// class css global
const glob = {
	center: css`
		display: flex;
		align-items: center;
		justify-content: center;
	`,
}

const Button = styled.button`
	background-color: ${color.green[500]};
	border: none;
	cursor: pointer;
	transition: 0.2;
	height: 40px;
	width: auto;
	padding: 4px 16px;
	border-radius: 12px;

	&:active {
		transition: 0.2s;
		transform: scale(0.8);
	}
`

export default function App() {
	// class css local/scoped
	const loc = {
		bolder: css`
			font-weight: bolder;
			color: ${color.blue[500]};
		`,
	}

	return (
		<>
			<div
				className={css`
					width: 960px;
					height: 520px;
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					grid-template-rows: repeat(3, 1fr);
					grid-column-gap: 8px;
					grid-row-gap: 8px;
					border-radius: 16px;

					& > div {
						background-color: white;
					}

					& > div:nth-child(1) {
						grid-area: 1 / 1 / 2 / 4;
					}
					& > div:nth-child(2) {
						grid-area: 2 / 1 / 4 / 3;
					}
					& > div:nth-child(3) {
						grid-area: 1 / 4 / 3 / 5;
					}
					& > div:nth-child(4) {
						grid-area: 2 / 3 / 4 / 4;
					}
					& > div:nth-child(5) {
						grid-area: 3 / 4 / 4 / 5;
					}
				`}
			>
				<div
					className={cx(
						glob.center,
						loc.bolder,
						css`
							grid-area: 1 / 1 / 2 / 4;
						`
					)}
				>
					Linaria
				</div>
				<div className={glob.center}>Lemure</div>
				<div className={glob.center}>
					<Button>AAAAAAAAAAAA</Button>
				</div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</>
	)
}
