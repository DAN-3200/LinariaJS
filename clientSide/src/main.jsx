// React imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Layouts imports
import Bento from './layouts/Bento'
import Login from './layouts/Login'
import './theme.style'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route exact path='/' element={<Login />} />
					<Route path='/Bento' element={<Bento />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

// Run Code
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
