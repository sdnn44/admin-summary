import React from 'react'
import BanCard from '../Card/BanCard'
import ProfileCard from '../Card/ProfileCard'
import Table from '../Table/Table'

type Props = {}

export default function Dashboard({}: Props) {
  return (
    <div className='h-screen p-4'>
        <div className='flex flex-row w-full h-1/3'>
          <BanCard />
          <ProfileCard />
        </div>
        <div className='w-full h-1/2'>
          <Table />
        </div>
    </div>
  )
}