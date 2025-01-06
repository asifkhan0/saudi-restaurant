import React from 'react'
import MasonryLayout from '../_components/MasonryLayout'

const Gallery: React.FC = () => {
  return (
    <div className='gallery-main'>
    <div className="title py-10 bg-primary text-secondary font-black text-center text-4xl uppercase">
        <h1>This is our gallery</h1>
    </div>
    <div className="gallery-container">
        <MasonryLayout />
    </div>
    </div>
  )
}

export default Gallery