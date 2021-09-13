export default (state, action) => {
	switch (action.type) {
		case 'TOGGLE_THEME':
			return {
				...state,
				theme: { ...state.theme, isLightTheme: action.payload },
			}
		case 'TOGGLE_AUTH':
			return {
				...state,
				auth: { ...state.auth, isAuthenticated: action.payload },
			}

		default:
			return state
	}
}
