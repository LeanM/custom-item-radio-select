import React, { ComponentType } from 'react'
import { ItemComponentProps } from './ItemRadioSelect'

export interface ItemProps {
  onSelected: (item: any, itemIndex: number) => void
  itemIndex: number
  itemData: any
  ItemComponent: ComponentType<ItemComponentProps>
  isSelected: boolean
}

export default function Item(props: ItemProps) {
  const { onSelected, itemData, itemIndex, ItemComponent, isSelected } = props

  return (
    <div
      onClick={() => {
        onSelected(itemData, itemIndex)
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <ItemComponent itemData={itemData} isSelected={isSelected} />
    </div>
  )
}
