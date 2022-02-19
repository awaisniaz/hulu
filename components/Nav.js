import React from 'react'
import request from '../utility/request'
import { useRouter } from 'next/router'

export default function Nav() {
  const router = useRouter()
  return (
    <nav className='relative'>
        <div className='flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
            {
              Object.entries(request).map(([item,{title,url}])=>{
               return <h2 
               onClick={()=>{
                  router.push(`/?genre=${item}`)
               }}
               className='last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500' key={item}>{title}</h2>
              })
            }
        </div>
      <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] to-red h-10 w-1/12'>

      </div>
      
    </nav>
  )
}
