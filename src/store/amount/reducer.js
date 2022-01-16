const initialState = {
    amount: 0
}

// Funcion del reducer con parametros del estado del inicial state en caso de no mandarse ninguno
export default function redRedux (state=initialState, action) {
    switch (action.type) {
        case 'DEPOSIT_MONEY':
            return {
                ...state,
                amount: state.amount + action.payload
            }
        case 'WITHDRAW_MONEY':
            return {
                ...state,
                amount: state.amount - action.payload
            }
        default:
            return state
    }
}

// Acceder a los datos del store viaje de vuelta de la info
export const selectCurrentAmount = state => {
    return state.amountReducer.amount
}