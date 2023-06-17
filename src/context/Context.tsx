import { createContext, useReducer } from 'react'
import { Reducer, State } from '../types/reducer'
import { reducer } from './Reducer'

const Initial = (): State => {
  const expense = localStorage.getItem('expense')
  if (expense) return JSON.parse(expense)
  return {
    transactions: [],
  }
}

const initialState = Initial()

export const Context = createContext<Reducer>({} as Reducer)

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}
