import React from 'react'

export interface ItemProps {
  onSelected: (selectedID: number) => void
  item: any
  children: JSX.Element
}

export default function Item(props: ItemProps) {
  const { onSelected, item, children } = props

  return (
    <div
      onClick={() => {
        onSelected(item)
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
