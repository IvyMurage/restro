import React, { useContext } from 'react'
import { RestaurantContext } from '../RestaurantContext'

export default function RestaurantPage() {
  const { restaurant} = useContext(RestaurantContext)
  return (
    <div>RestaurantPage</div>
  )
}
