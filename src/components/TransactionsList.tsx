import { useContext } from 'react'
import { Context } from '../context/Context'

function TransactionsList() {
  const { state, dispatch } = useContext(Context)
  const { transactions } = state
  const deleteTransaction = (index: number) => dispatch({ type: 'DELETE', payload: transactions[`${index}`] })

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((trans, index) => (
          <li key={trans.id} className={trans.amount > 0 ? 'plus' : 'minus'}>
            {trans.text}
            <span>{trans.amount}</span>
            <button className='delete-btn' onClick={() => deleteTransaction(index)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
export default TransactionsList
