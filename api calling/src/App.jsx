import React, { useState } from 'react'
import UserDetails from './components/UserDetails'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus } from './store/slices/counterSlice'
import { fetchData } from './store/slices/productSlice'
const App = () => {
  const [count, setCount] = useState()
  let dispatch = useDispatch()
  const selector = useSelector((state) => state.product)
  return (
    <>
      <UserDetails />

      <button onClick={(e) => dispatch(fetchData())}>Get Data</button>
      {selector.products.map((e) => (
        <li>{e.title}</li>
      ))}
    </>
  )
}

export default App
