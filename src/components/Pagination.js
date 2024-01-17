import React from 'react'

function Pagination({ page, decreasePageNumber, increasePageNumber }) {
  return (
    <div className='flex justify-center p-4 mt-8 items-center bg-gray-400'>
        <div onClick={decreasePageNumber} className='px-8 border-2'>
            Previous
        </div>
      <div className='px-8 font-bold'>
        {page}
      </div>
      <div onClick={increasePageNumber} className='px-8 border-2'>
        Next
      </div>
    </div>
  )
}

export default Pagination
