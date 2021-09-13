import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
	theme: {
		isLightTheme: true,
		light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
		dark: { syntax: '#ddd', ui: '#333', bg: '#555' },
	},
	auth: {
		isAuthenticated: false,
	},
}

// Create Context
export const GlobalContext = createContext(initialState)

// Create Provider
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)
	// Actions
	function toggleTheme() {
		dispatch({
			type: 'TOGGLE_THEME',
			payload: !state.theme.isLightTheme,
		})
	}
	function toggleAuth() {
		dispatch({
			type: 'TOGGLE_AUTH',
			payload: !state.auth.isAuthenticated,
		})
	}

	return (
		<GlobalContext.Provider
			value={{
				theme: state.theme,
				auth: state.auth,
				toggleAuth,
				toggleTheme,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
