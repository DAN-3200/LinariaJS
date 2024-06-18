import { css, cx } from '@linaria/core'
import { styled } from '@linaria/react'
import { color } from '../theme.style'

export default function Login() {
	const title = document.getElementsByTagName('title')[0]
	title.innerHTML = 'Login'

	const loc = {
		Parent: styled.div`
			width: 1080px;
			height: 560px;
			background-color: ${color.white[500]};
			border-radius: 4px;
			box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;

			display: grid;
			grid-template-areas: 'A B';
			grid-template-columns: 1.2fr 0.8fr;
			overflow: hidden;
		`,
	}

	return (
		<>
			<loc.Parent>
				<div
					className={css`
						grid-area: A;
						background-color: rosybrown;
					`}
				></div>
				<div
					className={css`
						grid-area: A;
					`}
				></div>
				<div
					className={css`
						grid-area: B;
						padding: 12px;
						display: grid;
						grid-template-rows: 0.4fr 0.8fr 0.1fr 0.2fr auto;
						grid-template-columns: 1fr;
					`}
				>
					<h1
						className={css`
							font-weight: bold;
							color: ${color.black[400]};
							align-self: center;
						`}
					>
						Login
					</h1>
				</div>
			</loc.Parent>
		</>
	)
}
