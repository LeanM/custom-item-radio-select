import React from 'react'

export interface ItemProps {
  onSelected: (selectedID: number) => void
  itemID: number
  children: JSX.Element
}

export default function Item(props: ItemProps) {
  const { onSelected, itemID, children } = props

  return (
    <div
      onClick={() => {
        onSelected(itemID)
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {children}
    </div>
  )
}
