

import React from 'react'
import './PaginationCount.scss';

const PaginationCount = ({start,finish,sumUsers,totalPages}) => {
  return (
    <>
   <p className='text-center   mt-3 rounded-pill page-1'> {start} to {finish} </p>
   <p className='text-center  rounded-pill page-1'> {sumUsers} users - {totalPages} pages </p>
    </>
  )
}

export default PaginationCount;