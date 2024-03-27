import React from 'react'
import { useSelector } from 'react-redux'

const COMPC = () => {
  let { count } = useSelector((state) => state.counter)
  console.log('component c')

  return (
    <>
      <p>COMPC:{count}</p>
    </>
  )
}

export default COMPC
