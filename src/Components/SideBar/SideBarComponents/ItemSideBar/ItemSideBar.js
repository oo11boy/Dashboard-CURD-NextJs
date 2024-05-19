import Link from 'next/link'
import React from 'react'

export default function ItemSideBar({src,name}) {
  return (
    <Link className='text-xl' href={src} title={name} >
        
        {name}</Link>
  )
}
