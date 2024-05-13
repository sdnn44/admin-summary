import React from 'react'
import LineChartPlaytime from '../Chart/LineChartPlaytime'

export default function BanCard() {
  return (
    <div className='w-full h-72 p-4 rounded-xl bg-gradient-to-l from-slate-800 to-slate-950'>
      <h2 className='text-center text-xl text-[#8884d8]'>W miesiącu maj rozegrano <span className='font-bold'>4744</span> minut.</h2>
      <LineChartPlaytime />
    </div>
  )
}
