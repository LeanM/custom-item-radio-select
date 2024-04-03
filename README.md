# item-radio-select

> Generic radio selection of items defined by user

[![NPM](https://img.shields.io/npm/v/item-radio-select.svg)](https://www.npmjs.com/package/item-radio-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save item-radio-select
```

## Demo

![](https://github.com/LeanM/custom-item-radio-select/blob/main/item-radio-select.gif?raw=true)

## Usage

### Example Item component to render

```tsx
import React from 'react'

export interface ItemData {
  id: number
  name: string
}

export interface ActualItemProps {
  itemData: ItemData
  actualSelectedItemID: number
}

export default function ActualItem(props: ActualItemProps) {
  const { itemData, actualSelectedItemID } = props

  return (
    <div
      style={{
        width: '4rem',
        textAlign: 'center',
        backgroundColor: actualSelectedItemID === itemData.id ? 'red' : 'grey', // Behaviour when the item is selected or not selected
        height: '4rem',
        borderRadius: '20px'
      }}
    >
      {itemData.name}
    </div>
  )
}
```

### Using component ActualItem as an Item in radio selection component

```tsx
import ItemRadioSelect from 'item-radio-select'
import React, { useState } from 'react'
import ActualItem from './ActualItem'
import { ItemData } from './ActualItem'

function App() {
  const [data, setData] = useState<ItemData[]>([
    { id: 1, name: 'Item1' },
    { id: 2, name: 'Item2' },
    { id: 3, name: 'Item3' }
  ])

  // Styles for ItemRadioSelect component
  // width: Specify the width of the container of the radio select
  // height: Specify the height of the container of the radio select
  // gap: Specify the gap between items of the radio select
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
        type='horizontal' // type can be "horizontal" (flexDirection row) or "vertical" (flexDirection column)
        itemsData={data} // Specify the data to render the items
        onSelectedItem={(itemID: number) => {}} // Define what executes when an item is selected
        ItemComponent={ActualItem} // Specify the Component that will render for each data item
      ></ItemRadioSelect>
    </div>
  )
}
```

## License

MIT © [LeanM](https://github.com/LeanM)
