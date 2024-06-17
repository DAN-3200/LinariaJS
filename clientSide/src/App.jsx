import Bento from './layouts/Bento'
import Login from './layouts/Login'

export default function App() {
	const title = document.getElementsByTagName('title')[0]
	title.innerHTML = 'Linaria'

	return (
		<>
			<Login/>
		</>
	)
}
