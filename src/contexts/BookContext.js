import { createContext, useState } from 'react'

export const BookContext = createContext()

const BookContextProvider = ({ children }) => {
	const [books, setBooks] = useState([
		{ id: 1, title: 'The Zahir' },
		{ id: 2, title: 'Wrath of Man' },
	])
	return (
		<BookContext.Provider value={{ books }}>{children}</BookContext.Provider>
	)
}

export default BookContextProvider
