// const deposit = () => {
//     return {
//         type: 'DEPOSIT_MONEY',
//         payload: 10
//     }
// }
// const withdraw = () => {
//     return {
//         type: 'WITHDRAW_MONEY',
//         payload: -10
//     }
// }
// Creamos las actiones que usaremos se activaran en el componentem aqui tambien van las peticiones al backend
const deposit = (type, payload) => {
    return {
        type,
        payload
    }
}
const withdraw = (type, payload) => {
    return {
        type,
        payload
    }
}
// Exporttamos, el default es solo cuando exportamos 1 cosa
export {deposit, withdraw}