import React from 'react'
function Avatar ({ choosingItems }) {
  return (
    <div className='avatar' key='avatar-div'>
      {choosingItems.map(choose => (
        <img
          key={`avatar_${choose.src}`}
          id={`avatar_${choose.src}`}
          className='avatar-img'
          alt=''
          src={choose.src}
          style={{ zIndex: choose.z_index }}
        />
      ))}
    </div>
  )
}

export default Avatar
