import React, { useEffect, useState } from 'react'
import { Product } from './App'

export interface CardProps {
  itemData: Product
  isSelected: boolean
}

export default function Card(props: CardProps) {
  const { itemData, isSelected } = props

  const [background, setBackground] = useState('grey')

  useEffect(() => {
    if (isSelected) {
      setBackground('red')
    } else setBackground('grey')
  }, [isSelected])

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
