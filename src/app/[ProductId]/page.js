
import ViewProduct from '@/Components/ViewProduct/ViewProduct'
import React from 'react'

export default function page({params}) {
 const {ProductId}=params
 
  return (
    <div>
        <ViewProduct ProductId={ProductId}/>
    </div>
  )
}
