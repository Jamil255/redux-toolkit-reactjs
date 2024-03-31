import React from 'react'
import { useSelector } from 'react-redux'

const UserDetails = () => {
  let { count } = useSelector((state) => state.counter)
  return (
    <>
      <h3>UserDetails:{count}</h3>
    </>
  )
}

export default UserDetails
