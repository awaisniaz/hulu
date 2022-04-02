
import React from 'react'
import HeaderItem from './HeaderItem'
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/solid'
export default function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center'>
       <div className='flex flex-grow justify-evenly max-w-2xl mt-2'>
           <HeaderItem  title='HOME' Icon={HomeIcon} />
           <HeaderItem  title='TRENDING' Icon={LightningBoltIcon} />
           <HeaderItem  title='VERIFIED' Icon={BadgeCheckIcon} />
           <HeaderItem  title='COLLECTIONS' Icon={CollectionIcon} />
           <HeaderItem  title='SEARCH' Icon={SearchIcon} />
           <HeaderItem  title='ACCOUNT' Icon={UserIcon} />
       </div>
      <h1 className='text-4xl font-extrabold'>Hulu</h1>

    </header>
  )
}
