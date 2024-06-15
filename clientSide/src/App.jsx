import { css, cx } from '@linaria/core'
import { color } from './theme.style'

// class css global
const glob = {
	center: css`
		display: flex;
		align-items: center;
		justify-content: center;
	`,
}

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
					width: 800px;
					height: 420px;
					display: grid;
					grid-template-columns: repeat(4, 1fr);
					grid-template-rows: repeat(3, 1fr);
					grid-column-gap: 8px;
					grid-row-gap: 8px;
					border-radius: 16px;

					& > div {
						background-color: ${color.white[500]};
					}
				`}
			>
				<div
					className={cx(
						loc.center,
						glob.bolder,
						css`
							grid-area: 1 / 1 / 2 / 4;
						`
					)}
				>
					Linaria
				</div>
				<div className={glob.center}>Lemure</div>
			</div>
		</>
	)
}
