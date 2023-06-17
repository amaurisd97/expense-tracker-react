import { useContext, useRef } from 'react'
import { Context } from '../context/Context'

function AddTransaction() {
  const { state, dispatch } = useContext(Context)
  const inputText = useRef<HTMLInputElement | null>(null)
  const inputNumber = useRef<HTMLInputElement | null>(null)

  const { transactions } = state

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    if (inputText.current?.value && inputNumber.current?.value) {
      dispatch({
        type: 'ADD',
        payload: {
          id: transactions[0] ? transactions[transactions.length - 1].id + 1 : 0,
          text: inputText.current.value,
          amount: Number(inputNumber.current.value),
        },
      })
      inputText.current.value = ''
      inputNumber.current.value = ''
    }
  }

  return (
    <>
      <h3>New transaction:</h3>
      <form onSubmit={handleSubmit}>
        <label className='label' htmlFor='text'>
          Description
        </label>
        <input type='text' id='text' name='text' placeholder='Salary, camera buy, ...' ref={inputText} />

        <label className='label' htmlFor='amount'>
          Amount
          <br />
        </label>
        <input type='number' id='amount' name='amount' placeholder='500, -400, ...' ref={inputNumber} />

        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}
export default AddTransaction
