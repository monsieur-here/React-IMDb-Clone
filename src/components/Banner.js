import React from 'react'

function Banner() {
  return (
    <div className='flex items-end h-[20vh] md: h-[60vh] bg-center bg-no-repeat' style={{
      backgroundImage: "url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)"}}>
        {/* Overlay Text */}
        <div className='w-full text-xl bg-gray-900 text-white text-center'>John Wick</div>
    </div>
  )
}

export default Banner
