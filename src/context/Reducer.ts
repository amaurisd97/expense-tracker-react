import { Action, State } from '../types/reducer'

export function reducer(state: State, action: Action) {
  const { transactions } = state
  switch (action.type) {
    case 'ADD': {
      localStorage.setItem('expense', JSON.stringify({ transactions: [...transactions, action.payload] }))

      return { transactions: [...transactions, action.payload] }
    }
    case 'DELETE': {
      localStorage.setItem('expense', JSON.stringify({ transactions: transactions.filter((trans) => trans.id !== action.payload.id) }))
      return { transactions: transactions.filter((trans) => trans.id !== action.payload.id) }
    }
    default:
      return state
  }
}
