import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const Booklist = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext)
	const theme = isLightTheme ? light : dark

	return (
		<div
			className='book-list'
			style={{ background: theme.bg, color: theme.syntax }}
		>
			<ul>
				<li style={{ background: theme.ui }}>The Ghost Wars</li>
				<li style={{ background: theme.ui }}>The Case of Exploding Mangoes</li>
				<li style={{ background: theme.ui }}>A Thousand Splendid Suns</li>
			</ul>
		</div>
	)
}

export default Booklist
