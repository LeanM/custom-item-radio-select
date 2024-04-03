# custom-item-radio-select

> Customizable radio selection of items defined by user

[![NPM](https://img.shields.io/npm/v/item-radio-select.svg)](https://www.npmjs.com/package/item-radio-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-item-radio-select
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

### Using ItemRadioSelect component

For this example, we want to represent these data items as simple cards, so we create a basic component called "Card", which will display the information of each item in a simple way.

The retrieved array of items and the 'Card' component are sent as properties to the 'ItemRadioSelect' component.

It can also be observed how styles can be specified within it, as well as the functionality that is executed when one of the items is selected.

```tsx
import ItemRadioSelect from 'item-radio-select'
import React, { useState } from 'react'
import Card from './Card'

export interface CardData {
  id: number
  name: string
}

function App() {
  // Fetched data
  const [data, setData] = useState<CardData[]>([
    { id: 1, name: 'Item1' },
    { id: 2, name: 'Item2' },
    { id: 3, name: 'Item3' }
  ])

  // Styles for ItemRadioSelect component:
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
        onSelectedItem={(item: CardData) => {}} // Define what executes when an item is selected
        ItemComponent={Card} // Specify the Component that will render for each data item
        //  In this case, the Card component created below
      ></ItemRadioSelect>
    </div>
  )
}
```

Every card will receive the data of the item to render and the information of
the actual item selected in the ItemRadioSelect component, so the Card can
make whatever you want when is or is not selected.

```tsx
import React from 'react'
import { CardData } from './App'

export interface CardProps {
  itemData: CardData
  actualSelectedItem: any
}

export default function Card(props: CardProps) {
  // The component will receive in props the information of what item is selected
  // on the radio select component
  const { itemData, actualSelectedItem } = props

  return (
    <div
      style={{
        width: '4rem',
        textAlign: 'center',
        backgroundColor: actualSelectedItem.id === itemData.id ? 'red' : 'grey',
        // Behaviour when the item is the one selected or not
        height: '4rem',
        borderRadius: '20px'
      }}
    >
      {itemData.name}
    </div>
  )
}
```

## License

MIT © [LeanM](https://github.com/LeanM)
