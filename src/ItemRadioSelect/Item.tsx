import React from 'react'

export interface ItemProps {
  onSelected: (item: any, itemIndex: number) => void
  itemIndex: number
  itemData: any
  radioItemRender: (radioItemData: any, isSelected: boolean) => React.ReactNode
  isSelected: boolean
}

export default function Item(props: ItemProps) {
  const { onSelected, itemData, itemIndex, isSelected, radioItemRender } = props

  return (
    <div
      onClick={() => {
        onSelected(itemData, itemIndex)
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
      }}
    >
      {radioItemRender(itemData, isSelected)}
    </div>
  )
}
