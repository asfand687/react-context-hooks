import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

const ThemeToggle = () => {
	const { toggleTheme } = useContext(GlobalContext)
	return <button onClick={toggleTheme}>Toggle the Theme</button>
}

export default ThemeToggle
