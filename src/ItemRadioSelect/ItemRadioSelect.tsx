import React, { ComponentType, useEffect, useState } from 'react'
import Item from './Item'

export interface ItemRadioSelectProps {
  ItemComponent: ComponentType<any>
  itemsData: any[]
  onSelectedItem: (itemID: number) => void
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
  const [selectedItemID, setSelectedItemID] = useState<number>(-1)
  const [componentStyles, setComponentStyles] = useState<any>({})

  useEffect(() => {
    if (type === 'vertical') {
      setComponentStyles({ ...styles, ...style, flexDirection: 'column' })
    } else setComponentStyles({ ...styles, ...style })
  }, [style])

  useEffect(() => {
    onSelectedItem(selectedItemID)
  }, [selectedItemID])

  const handleSelected = (selectedID: number) => {
    setSelectedItemID(selectedID)
  }

  return (
    <div style={componentStyles}>
      {itemsData.map((item, index) => {
        return (
          <Item
            key={index}
            itemID={item.id}
            onSelected={(selectedID: number) => {
              handleSelected(selectedID)
            }}
          >
            <ItemComponent
              itemData={item}
              actualSelectedItemID={selectedItemID}
            />
          </Item>
        )
      })}
    </div>
  )
}
