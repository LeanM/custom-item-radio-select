import React, { useCallback, useEffect, useState } from 'react'
import Item from './Item'

export interface ItemRadioSelectProps {
  radioItemRender: (radioItemData: any, isSelected: boolean) => React.ReactNode
  itemsData: any[]
  onSelectedItem: (selectedItem: any) => void
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
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap'
}

export default function ItemRadioSelect(props: ItemRadioSelectProps) {
  const { itemsData, radioItemRender, onSelectedItem, style, type } = props
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1)
  const [componentStyles, setComponentStyles] = useState<any>({})

  useEffect(() => {
    if (type === 'vertical') {
      setComponentStyles({ ...styles, ...style, flexDirection: 'column' })
    } else setComponentStyles({ ...styles, ...style })
  }, [style])

  const updateSelectedItem = useCallback((selectedIndex: number) => {
    setSelectedItemIndex(selectedIndex)
  }, [])

  const handleSelected = (selectedItem: any, selectedIndex: number) => {
    onSelectedItem(selectedItem)
    updateSelectedItem(selectedIndex)
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
            isSelected={selectedItemIndex === index}
            radioItemRender={(radioItemData: any, isSelected: boolean) =>
              radioItemRender(radioItemData, isSelected)
            }
          />
        )
      })}
    </div>
  )
}
