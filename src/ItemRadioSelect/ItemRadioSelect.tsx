import React, { ComponentType, useEffect, useState } from 'react'
import Item from './Item'

export interface ItemRadioSelectProps {
  ItemComponent: ComponentType<any>
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
  const [selectedItem, setSelectedItem] = useState<any>({})
  const [componentStyles, setComponentStyles] = useState<any>({})

  useEffect(() => {
    if (type === 'vertical') {
      setComponentStyles({ ...styles, ...style, flexDirection: 'column' })
    } else setComponentStyles({ ...styles, ...style })
  }, [style])

  useEffect(() => {
    onSelectedItem(selectedItem)
  }, [selectedItem])

  const handleSelected = (selectedItem: any) => {
    setSelectedItem(selectedItem)
  }

  return (
    <div style={componentStyles}>
      {itemsData.map((item, index) => {
        return (
          <Item
            key={index}
            item={item}
            onSelected={(selectedItem: any) => {
              handleSelected(selectedItem)
            }}
          >
            <ItemComponent itemData={item} actualSelectedItem={selectedItem} />
          </Item>
        )
      })}
    </div>
  )
}
