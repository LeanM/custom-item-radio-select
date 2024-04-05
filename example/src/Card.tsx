import React, { useEffect, useState } from 'react'
import { Product } from './App'

export interface CardProps {
  productData: Product
  isProductSelected: boolean
}

export default function Card(props: CardProps) {
  const { productData, isProductSelected } = props

  const [background, setBackground] = useState('grey')

  useEffect(() => {
    if (isProductSelected) {
      setBackground('red')
    } else setBackground('grey')
  }, [isProductSelected])

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
      <p>{productData.name}</p>
      <p style={{ color: 'green' }}>${productData.value}</p>
    </div>
  )
}
