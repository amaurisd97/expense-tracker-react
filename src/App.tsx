import './App.css'
import AddTransaction from './components/AddTransaction'
import Balance from './components/Balance'
import Header from './components/Header'
import IncomeExpense from './components/IncomeExpense'
import TransactionsList from './components/TransactionsList'
import { ContextProvider } from './context/Context'

function App() {
  return (
    <ContextProvider>
      <Header />
      <Balance />
      <div className='container'>
        <div className='balance-container'>
          <IncomeExpense />
          <TransactionsList />
        </div>
        <div id='new-transaction-container'>
          <AddTransaction />
        </div>
      </div>
    </ContextProvider>
  )
}

export default App
