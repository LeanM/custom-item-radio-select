import ItemRadioSelect from 'custom-item-radio-select'
import React, { useState } from 'react'
import Card from './Card'

export interface Product {
  id: number
  name: string
  value: number
}

function App() {
  const [data, setData] = useState<Product[]>([
    { id: 1, name: 'Xbox', value: 500 },
    { id: 2, name: 'PC', value: 1000 },
    { id: 3, name: 'PS5', value: 400 }
  ])

  const itemRadioSelectStyles = {
    width: '100%',
    height: '50%',
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
        type='vertical'
        itemsData={data}
        onSelectedItem={(item: Product) => {}}
        ItemComponent={Card}
      ></ItemRadioSelect>
    </div>
  )
}

export default App
