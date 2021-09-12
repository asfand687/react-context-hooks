import { createContext } from 'react'

const state = {
	isLightTheme: true,
	light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
	dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
}

export const ThemeContext = createContext(state)
