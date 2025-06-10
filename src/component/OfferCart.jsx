import React from 'react'

export default function OfferCart({...item}) {
  return (
    <div className='p-10 h-130  border-1 shadow-lg  border-gray-300 flex flex-col justify-between items-center'>
      <img src={item.image} alt="" />
      <span className='text-xl my-4'>{item.category}</span>
      <span> {item.title}
      </span>
      <div className='text-xl  mt-5' >
        <span >{item.price} </span>
        <span >تومان</span>
      </div>
    </div>
  )
}
