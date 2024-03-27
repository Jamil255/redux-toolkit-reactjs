import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './store/Slices/CounterSlice'
import COMPC from './components/COMPC.jsx'

const App = () => {
  let dispatch = useDispatch()
  console.log('app')
  return (
    <>
      <h3>hello App</h3>
      <COMPC />
      <button
        onClick={() => {
          dispatch(add())
        }}
      >
        update
      </button>
    </>
  )
}

export default App
