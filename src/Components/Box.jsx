import React from 'react'

const Box = ({image,title,rating}) => {


    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  return (
    <div className='shadow-lg min-h-[200px] mt-3 cursor-pointer'>
      <img src={IMGPATH + image} alt="" className='w-full' />
      <div className='flex justify-between items-center'>
        <span className='text-xl'>{title}</span>
        <span className='text-lg font-semibold text-yellow-500'>{rating}</span>
      </div>
    </div>
  )
}

export default Box
