import React, { useState } from 'react'
import UserDetails from './components/UserDetails'
import { useDispatch, useSelector } from 'react-redux'
import { add, minus } from './store/slices/counterSlice'
import { fetchData } from './store/slices/productSlice'
import ProductCard from './components/ProductCard.jsx'
const App = () => {
  const [count, setCount] = useState()
  let dispatch = useDispatch()
  const selector = useSelector((state) => state.product)
  console.log(selector.products[2])
  return (
    <>
      <button onClick={(e) => dispatch(fetchData())}>Get Data</button>
      {selector.products.map((e) => {
        return (
          <ProductCard
            title={e.title}
            image={e.image}
            desc={e.descirption}
            key={e.id}
          />
        )
      })}
    </>
  )
}

export default App
