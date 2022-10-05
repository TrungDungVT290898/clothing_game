import React from 'react'
import '../App.css'

function Item ({ id, group_name, image_src, alt_name, handleItemClick }) {
  return (
    <div key={`${id}_clickable`} className='clickable square'>
      <img
        key={id}
        id={id}
        className='img-center'
        src={`${image_src}`}
        alt={alt_name}
        onClick={e => {
          handleItemClick(e.target.src, group_name)
        }}
      />
    </div>
  )
}

export default Item
