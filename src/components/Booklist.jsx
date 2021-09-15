import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'
import { GlobalContext } from '../contexts/GlobalState'

const Booklist = () => {
	const { theme } = useContext(GlobalContext)
	const { books } = useContext(BookContext)
	const mode = theme.isLightTheme ? theme.light : theme.dark
	console.log(books)
	return (
		<div
			className='book-list'
			style={{ color: mode.syntax, background: mode.bg }}
		>
			<ul>
				{books.map((book) => (
					<li key={book.id} style={{ background: mode.ui }}>
						{book.title}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Booklist
