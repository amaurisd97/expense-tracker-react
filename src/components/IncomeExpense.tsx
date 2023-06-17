import { Context } from '../context/Context'
import { useContext } from 'react'

function IncomeExpense() {
  const { state } = useContext(Context)
  const { transactions } = state
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>${transactions.filter((trans) => trans.amount > 0).reduce((acc, trans) => trans.amount + acc, 0)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>${transactions.filter((trans) => trans.amount < 0).reduce((acc, trans) => trans.amount + acc, 0)}</p>
      </div>
    </div>
  )
}
export default IncomeExpense
