import React, { ComponentType, useEffect, useState } from 'react'
import Item from './Item'

export interface ItemComponentProps {
  itemData: any
  isSelected: boolean
}

export interface ItemRadioSelectProps {
  ItemComponent: ComponentType<ItemComponentProps>
  itemsData: any[]
  onSelectedItem: (itemID: any) => void
  style?: ItemRadioSelectStyles
  type?: StyleType
}

export interface ItemRadioSelectStyles {
  width?: string
  height?: string
  gap?: string
}

export type StyleType = 'horizontal' | 'vertical'

const styles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap'
}

export default function ItemRadioSelect(props: ItemRadioSelectProps) {
  const { itemsData, ItemComponent, onSelectedItem, style, type } = props
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1)
  const [componentStyles, setComponentStyles] = useState<any>({})

  useEffect(() => {
    if (type === 'vertical') {
      setComponentStyles({ ...styles, ...style, flexDirection: 'column' })
    } else setComponentStyles({ ...styles, ...style })
  }, [style])

  const handleSelected = (selectedItem: any, selectedIndex: number) => {
    onSelectedItem(selectedItem)
    setSelectedItemIndex(selectedIndex)
  }

  return (
    <div style={componentStyles}>
      {itemsData.map((item, index) => {
        return (
          <Item
            key={index}
            itemIndex={index}
            itemData={item}
            onSelected={(selectedItem: any, selectedIndex: number) => {
              handleSelected(selectedItem, selectedIndex)
            }}
            actualSelectedItemIndex={selectedItemIndex}
            ItemComponent={ItemComponent}
          />
        )
      })}
    </div>
  )
}
