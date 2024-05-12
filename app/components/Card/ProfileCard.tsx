"use client";
import { useGlobalState } from '@/app/context/globalContextProvider';
import React, { useEffect } from 'react'

export default function ProfileCard() {

    const { getNumberOfAdminBans, getNumberOfGivenDemos, getNumberOfGivenScreenshots } = useGlobalState();

    return (
        <div className='rounded-xl bg-gradient-to-r from-slate-700 to-slate-950 w-96 h-72 flex flex-col gap-5 p-4 relative overflow-hidden'>
            <div className='flex items-center'>
                <h1 className='text-7xl font-bold'>{getNumberOfGivenDemos()}</h1><span className='m-1 text-2xl'>demek</span>
            </div>
            <div className='flex items-center'>
                <h1 className='text-7xl font-bold'>{getNumberOfGivenScreenshots()}</h1><span className='m-1 text-2xl'>screenshotów</span>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-7xl font-bold'>{getNumberOfAdminBans()}</h1><span className='m-1 text-2xl'>banów permamentnych</span>
            </div>
            <div className='absolute bg-white w-36 h-36 -right-5 -top-5 rounded-full opacity-10' />
        </div>
    )
}
