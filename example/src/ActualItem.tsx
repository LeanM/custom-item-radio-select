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
        backgroundColor: actualSelectedItem.id === itemData.id ? 'red' : 'grey',
        height: '4rem',
        borderRadius: '20px'
      }}
    >
      {itemData.name}
    </div>
  )
}
