import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

const Navbar = () => {
	const { theme, auth, toggleAuth } = useContext(GlobalContext)
	const mode = theme.isLightTheme ? theme.light : theme.dark
	return (
		<nav style={{ background: mode.ui, color: mode.syntax }}>
			<h1>Context App</h1>
			<div onClick={toggleAuth}>
				{auth.isAuthenticated ? 'Logged In' : 'Logged Out'}
			</div>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	)
}

export default Navbar
