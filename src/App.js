import Booklist from './components/Booklist'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import BookContextProvider from './contexts/BookContext'
import { GlobalProvider } from './contexts/GlobalState'

function App() {
	return (
		<div className='App'>
			<GlobalProvider>
				<Navbar />
				<BookContextProvider>
					<Booklist />
				</BookContextProvider>
				<ThemeToggle />
			</GlobalProvider>
		</div>
	)
}

export default App
