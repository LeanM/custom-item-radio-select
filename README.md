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

### Concept

To obtain a customizable radio selection of any type, this component requires information that will be represented and how this information will be displayed as a radio button. Therefore, the ItemRadioSelect component must be provided with a component that represents the existing information according to the developer's preferences.

Thus, this component requires an array of data (the items of any type) and the component that will be rendered as a radio button for each of those items.

Let's consider the example where we fetch information about products that have an ID, a name, and a value. In this case, we have an array with the following items:

```tsx
data = [
  { id: 1, name: 'Xbox', value: 500 },
  { id: 2, name: 'PC', value: 1000 },
  { id: 3, name: 'PS5', value: 400 }
]
```

### ItemRadioSelect Component

For this example, we want to represent these products as simple cards that will function as radio buttons, so we create a basic component called "Card", which will display the information of each item in a simple, customized way.

The retrieved array of products and the 'Card' component are sent as properties to the 'ItemRadioSelect' component.

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
        itemsData={data} // Specification of the data to render the items
        onSelectedItem={(item: Product) => {
          console.log(item)
        }} // Definition of what to execute upon the selection of an item
        ItemComponent={Card}
        // Specification of the component that will render each data item and function as a radio button
        //  In this case, the Card component created below
      />
    </div>
  )
}
```

### Example Card Component

The component designed to function as a radio button will receive the data of the item (in this example, a product) to render it, along with a boolean prop that determines whether the component represents the current selection or not.

```tsx
import React from 'react'
import { CardData } from './App'

// Necessary props
export interface CardProps {
  itemData: Product // The data of the item to display (in this case a Product)
  isSelected: boolean // If this item (in this case, the Card) is the current selection on the ItemRadioSelect component or not
}

export default function Card(props: CardProps) {
  const { itemData, isSelected } = props

  const [background, setBackground] = useState('grey')

  useEffect(() => {
    // Customizable behavior for when the item is selected or not
    if (isSelected) {
      setBackground('red')
    } else {
      setBackground('grey')
    }
  }, [isSelected])

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

## Finally

Given the operation of the component in this example, this shows that it can be utilized for any dataset (as in this case, the products), and with any component representing them (as in this case, the Card component) using 'itemData' and 'isSelected' props provided by the ItemRadioSelect component.

With that, allowing customization of how the different information is represented, and what happens upon selecting/deselecting an item.

## License

MIT © [LeanM](https://github.com/LeanM)
