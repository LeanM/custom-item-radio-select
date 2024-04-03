# custom-item-radio-select

> Customizable radio selection of items defined by user

[![NPM](https://img.shields.io/npm/v/item-radio-select.svg)](https://www.npmjs.com/package/item-radio-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save item-radio-select
```

## Demo

![](https://github.com/LeanM/custom-item-radio-select/blob/main/item-radio-select.gif?raw=true)

## Usage

### Example Item component to render

To obtain a customizable radio selection of any type, this component requires the information that will be represented and how this information will be displayed. For this, the ItemRadioSelect component must be injected with a component that represents the existing information according to the developer's preferences.

So this component requires an array of data (the items of any type) and the component that will be rendered as a radio button for every of those items.

Let's consider the example where we fetch information about items that have an ID and a name. In this case, we have an array with the following items:

```tsx
data = [
  { id: 1, name: 'Item1' },
  { id: 2, name: 'Item2' },
  { id: 3, name: 'Item3' }
]
```

For this example, we create a basic component called "ActualItem" , which will display the information of each item in a simple way.

```tsx
import React from 'react'
import { ItemData } from './App'

export interface ActualItemProps {
  itemData: ItemData
  actualSelectedItem: any
}

export default function ActualItem(props: ActualItemProps) {
  const { itemData, actualSelectedItem } = props

  return (
    <div
      style={{
        width: '4rem',
        textAlign: 'center',
        backgroundColor: actualSelectedItem.id === itemData.id ? 'red' : 'grey', // Behaviour when the item is the one selected or not
        height: '4rem',
        borderRadius: '20px'
      }}
    >
      {itemData.name}
    </div>
  )
}
```

### Using component ActualItem in radio selection component

Now we can see that the retrieved array of items and the 'ActualItem' component are sent as properties to the 'ItemRadioSelect' component.

It can also be observed how styles can be specified within it, as well as the functionality that is executed when one of the items is selected.

```tsx
import ItemRadioSelect from 'item-radio-select'
import React, { useState } from 'react'
import ActualItem from './ActualItem'

export interface ItemData {
  id: number
  name: string
}

function App() {
  // Fetched data
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
        onSelectedItem={(item: ItemData) => {}} // Define what executes when an item is selected
        ItemComponent={ActualItem} // Specify the Component that will render for each data item
      ></ItemRadioSelect>
    </div>
  )
}
```

## License

MIT © [LeanM](https://github.com/LeanM)
