import React, { useContext } from 'react'
import { GlobalContext } from '../contexts/GlobalState'

const Booklist = () => {
	const { theme } = useContext(GlobalContext)
	const mode = theme.isLightTheme ? theme.light : theme.dark
	return (
		<div
			className='book-list'
			style={{ color: mode.syntax, background: mode.bg }}
		>
			<ul>
				<li style={{ background: mode.ui }}>The Fifth Mountain</li>
				<li style={{ background: mode.ui }}>Anxious People</li>
				<li style={{ background: mode.ui }}>Man Called Ove</li>
			</ul>
		</div>
	)
}

export default Booklist
