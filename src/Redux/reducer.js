const initialState = {
    theme: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'THEME':
            return { ...state, theme: !state.theme }
        default:
            return state;
    }
}

export {reducer}