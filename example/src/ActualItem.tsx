import React from 'react'

export interface ItemData {
  id: number
  name: string
  description: string
  rating: number
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
        backgroundColor: actualSelectedItemID === itemData.id ? 'red' : 'grey',
        height: '4rem',
        borderRadius: '20px'
      }}
    >
      {itemData.name}
    </div>
  )
}
