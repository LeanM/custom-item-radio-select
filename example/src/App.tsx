import ItemRadioSelect from 'custom-item-radio-select'
import React, { useState } from 'react'
import ActualItem from './ActualItem'
import { ItemData } from './ActualItem'

function App() {
  const [data, setData] = useState<ItemData[]>([
    { id: 1, name: 'Item1', description: 'ea', rating: 1 },
    { id: 2, name: 'Item2', description: 'ea', rating: 2 },
    { id: 3, name: 'Item3', description: 'ea', rating: 3 }
  ])

  const itemRadioSelectStyles = {
    width: '100%',
    height: '20rem',
    gap: '1rem'
  }

  return (
    <div
      style={{
        backgroundColor: 'black',
        height: '100vh',
        width: '100%',
        paddingTop: '10rem'
      }}
    >
      <ItemRadioSelect
        style={itemRadioSelectStyles}
        type='horizontal'
        itemsData={data}
        onSelectedItem={(itemID: number) => {}}
        ItemComponent={ActualItem}
      ></ItemRadioSelect>
    </div>
  )
}

export default App
