import Booklist from './components/Booklist'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import { GlobalProvider } from './contexts/GlobalState'

function App() {
	return (
		<div className='App'>
			<GlobalProvider>
				<Navbar />
				<Booklist />
				<ThemeToggle />
			</GlobalProvider>
		</div>
	)
}

export default App
