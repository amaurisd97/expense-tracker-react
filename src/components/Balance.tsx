import { useContext } from 'react'
import { Context } from '../context/Context'

function Balance() {
  const { state } = useContext(Context)
  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Balance:</h4>
      <h1>${state.transactions.reduce((acc, trans) => trans.amount + acc, 0)}</h1>
    </div>
  )
}
export default Balance
