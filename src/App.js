import './App.css'
import React, { useState } from 'react'
import ListItems from './components/ListItems'
import config from './config.json'
import Avatar from './components/Avatar'
const items = config
const items_keys = Object.keys(items)
function App () {
  function checkZIndix (group) {
    return group === 'Body'
      ? 0
      : group === 'Eyes'
      ? 1
      : group === 'Layer 1'
      ? 2
      : group === 'Layer 2'
      ? 3
      : group === 'Glasses'
      ? 5
      : 4
  }
  const generateObjectItem = (src, group) => {
    return {
      z_index: checkZIndix(group),
      group,
      src: src
    }
  }

  const generateItems = () => {
    let random = []
    items_keys.forEach(key => {
      const index = Math.floor(
        Math.random() * (items[key].images_src.length + 1)
      )
      random = [
        ...random,
        generateObjectItem(
          `./assets/${items[key].origin_src}${items[key].images_src[index]}`,
          key
        )
      ]
    })
    return random
  }
  const [choosingItems, setChoosingItems] = useState(() => generateItems())
  function handleRandomButtonClick () {
    setChoosingItems(generateItems())
  }
  const handleItemClick = (src, group) => {
    setChoosingItems([
      ...choosingItems.filter(s => s.group !== group),
      generateObjectItem(src, group)
    ])
  }
  return (
    <div className='App'>
      <div className='title'>CHARACTER</div>
      <div className='subtitle'>🛠️CUSTOMIZATION🛠️</div>
      <div className='divider'></div>
      <div className='avatar-group gap-30'>
        <div className='avatar-wrapper'>
          <Avatar choosingItems={choosingItems} />

          <div>
            <button onClick={handleRandomButtonClick}>RANDOMIZE</button>
          </div>
        </div>
        <div>
          <ListItems items={items} handleItemClick={handleItemClick} />
        </div>
      </div>
    </div>
  )
}

export default App
