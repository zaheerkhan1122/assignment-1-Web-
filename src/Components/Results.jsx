import React from 'react'
import Box from './Box'

const Results = ({movies}) => {

    const boxes = movies.map((item, index) => {
        return  <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average} />
    })


  return (
    <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-4'>
      {
        boxes
      }
    </div>
  )
}

export default Results
