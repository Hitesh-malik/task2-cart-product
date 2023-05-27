import React, { useEffect, useRef, useState } from 'react'

const Cart = ({ selectedData }) => {
  const totalItem = useRef(0)
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    for (let key in selectedData) {
      totalItem.current += selectedData[key];
    }
    setTotalAmount(totalItem.current * 60);
  }, [selectedData])

  return (
    <div className=' gap-4 flex  flex-col justify-center items-center border-4 border-black p-5 h-[20em] font-bold text-xl'>
      <div className='uppercase'>total amount</div>
      <div>{totalAmount} <span>&#8377;</span></div>
    </div>
  )
}

export default Cart