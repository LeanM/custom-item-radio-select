import ItemRadioSelect from 'custom-item-radio-select'
import React, { useState } from 'react'
import ActualItem from './ActualItem'

export interface ItemData {
  id: number
  name: string
}

function App() {
  const [data, setData] = useState<ItemData[]>([
    { id: 1, name: 'Item1' },
    { id: 2, name: 'Item2' },
    { id: 3, name: 'Item3' }
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
        onSelectedItem={(item: ItemData) => {}}
        ItemComponent={ActualItem}
      ></ItemRadioSelect>
    </div>
  )
}

export default App
