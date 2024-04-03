# custom-item-radio-select

> Customizable radio selection of items defined by user

[![NPM](https://img.shields.io/npm/v/item-radio-select.svg)](https://www.npmjs.com/package/item-radio-select) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save custom-item-radio-select
```

## Demo

![](https://github.com/LeanM/custom-item-radio-select/blob/main/custom-item-radio-select.gif?raw=true)

## Usage

### Example Item component to render

To obtain a customizable radio selection of any type, this component requires the information that will be represented and how this information will be displayed. For this, the ItemRadioSelect component must be injected with a component that represents the existing information according to the developer's preferences.

So this component requires an array of data (the items of any type) and the component that will be rendered as a radio button for every of those items.

Let's consider the example where we fetch information about Products that have an ID, a name and a value. In this case, we have an array with the following items:

```tsx
data = [
  { id: 1, name: 'Xbox', value: 500 },
  { id: 2, name: 'PC', value: 1000 },
  { id: 3, name: 'PS5', value: 400 }
]
```

### Using ItemRadioSelect component

For this example, we want to represent these produccts as simple cards, so we create a basic component called "Card", which will display the information of each item in a simple customized way.

The retrieved array of Products and the 'Card' component are sent as properties to the 'ItemRadioSelect' component.

It can also be observed how styles can be specified within it, as well as the functionality that is executed when one of the items is selected.

```tsx
import ItemRadioSelect from 'item-radio-select'
import React, { useState } from 'react'
import Card from './Card'

export interface Product {
  id: number
  name: string
  value: number
}

function App() {
  // Fetched data
  const [data, setData] = useState<Product[]>([
    { id: 1, name: 'Xbox', value: 500 },
    { id: 2, name: 'PC', value: 1000 },
    { id: 3, name: 'PS5', value: 400 }
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
        onSelectedItem={(item: Product) => {}} // Define what executes when an item is selected
        ItemComponent={Card} // Specify the Component that will render for each data item
        //  In this case, the Card component created below
      />
    </div>
  )
}
```

Every card will receive the data of the item (in this example, a product) to render
and updates of the actual item selected in the ItemRadioSelect component.

```tsx
import React from 'react'
import { CardData } from './App'

// Props need to respect the 'itemData' and 'actualSelectedItem' key names.
export interface CardProps {
  itemData: Product
  actualSelectedItem: Product
}

export default function Card(props: CardProps) {
  // The component will receive in props the information of what item
  // is selected on the radio select component
  const { itemData, actualSelectedItem } = props

  const [background, setBackground] = useState('grey')

  useEffect(() => {
    // Behaviour that checks if this item is the one selected or not and do something
    // (in this particular case the check is by the id's)
    if (actualSelectedItem.id === itemData.id) {
      setBackground('red')
    } else setBackground('grey')
  }, [actualSelectedItem])

  return (
    <div
      style={{
        width: '8rem',
        textAlign: 'center',
        backgroundColor: background,
        height: '8rem',
        borderRadius: '20px',
        fontWeight: '700'
      }}
    >
      <p>{itemData.name}</p>
      <p style={{ color: 'green' }}>${itemData.value}</p>
    </div>
  )
}
```

## License

MIT © [LeanM](https://github.com/LeanM)
