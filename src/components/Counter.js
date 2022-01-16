import {deposit, withdraw} from './../store/amount/action'
import { useState } from 'react';
import {connect} from 'react-redux'
import { selectCurrentAmount } from '../store/amount/reducer';

// Del estado (objeto store) que datos quires de regreso
// Esto puede ir en el reducer ya que es algo que majeta el estado
const mapStateToProps = state => {
    return {
        amount: selectCurrentAmount(state),
    }
}

const Counter = ({amount, deposit, withdraw}) => {
    const [action, setAction] = useState({
        type: 'DEPOSIT_MONEY',
        payload: 0
    })
    const handleOnSubmit = event => {
        event.preventDefault()
        if (action.type === 'DEPOSIT_MONEY') {
            return deposit(action.type, action.payload)
        }
        return withdraw(action.type, action.payload)
    }
    const handleChange = event => {
        event.preventDefault()
        if (event.target.name === 'action') {
            return setAction({
                ...action,
                type: event.target.value
            })
        }
        return setAction({
            ...action,
            payload: parseInt(event.target.value)
        })
    }
    // eslint-disable-next-line
  return (
    <div>
      <h1>Amount: { amount }</h1>
      <form onSubmit={e => handleOnSubmit(e)}>
        <input onChange={e => handleChange(e)} defaultChecked={action.type==='DEPOSIT_MONEY'} value="DEPOSIT_MONEY" type="radio" id="deposit" name="action" />
        <label htmlFor="deposit">Deposit</label>
        <br />
        <input onChange={e => handleChange(e)} type="radio" id="withdraw" name="WITHDRAW_MONEY" value="WITHDRAW_MONEY" name="action" />
        <label htmlFor="withdraw">Withdraw</label>
        <br />
        <input type="number" id="amount" name="amount" name="amount" onChange={e => handleChange(e)} />
        <br />
        <label htmlFor="amount">Amount</label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Nos conectamos desde este componente hacia el store, en los parametros del conecte se pasa lo que quieres obtener del store y despues lo que quires enviar
export default connect(mapStateToProps, {deposit, withdraw})(Counter)
