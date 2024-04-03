import React, { useEffect, useState } from 'react'
import { Product } from './App'

export interface CardProps {
  itemData: Product
  actualSelectedItem: Product
}

export default function Card(props: CardProps) {
  const { itemData, actualSelectedItem } = props

  const [background, setBackground] = useState('grey')

  useEffect(() => {
    if (actualSelectedItem.id === itemData.id) {
      setBackground('red')
    } else setBackground('grey')
  }, [actualSelectedItem])

  return (
    <div
      style={{
        width: '8rem',
        textAlign: 'center',
        backgroundColor: background,
        height: '8rem',
        borderRadius: '20px',
        fontWeight: '700'
      }}
    >
      <p>{itemData.name}</p>
      <p style={{ color: 'green' }}>${itemData.value}</p>
    </div>
  )
}
