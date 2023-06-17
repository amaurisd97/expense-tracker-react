export interface State {
  transactions: Transaction[]
}
export interface Transaction {
  id: number
  text: string
  amount: number
}
export interface Action {
  type: 'ADD' | 'DELETE'
  payload: Transaction
}
export interface Reducer {
  state: State
  dispatch: React.Dispatch<Action>
}
