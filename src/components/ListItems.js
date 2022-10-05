import React from 'react'
import '../App.css'
import Item from './Item'

function ListItems ({ items, handleItemClick }) {
  return (
    <>
      {Object.keys(items).map(item => (
        <div key={`${items[item].name}_container`} className='list-section'>
          <h2 key={`${items[item].name}_h2`}>{items[item].name}</h2>
          <div key={`${items[item].name}_list`} className='list'>
            {items[item].images_src.map(i => {
              return (
                <Item
                  id={`${items[item].name}_${i}`}
                  key={`${items[item].name}_${i}`}
                  group_name={item}
                  image_src={`./assets/${items[item].origin_src}${i}`}
                  alt_name={i}
                  handleItemClick={handleItemClick}
                />
              )
            })}
          </div>
        </div>
      ))}
    </>
  )
}

export default ListItems
