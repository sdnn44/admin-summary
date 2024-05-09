import React from 'react'

export default function ProfileCard() {
    return (
        <div className='rounded-xl bg-gradient-to-r from-purple-500 to-purple-900 w-96 h-72 flex flex-col gap-5 p-4 relative overflow-hidden'>
            <div className='flex items-center'>
                <h1 className='text-7xl font-bold'>5</h1><span className='m-1 text-2xl'>demek</span>
            </div>
            <div className='flex items-center'>
                <h1 className='text-7xl font-bold'>3</h1><span className='m-1 text-2xl'>screenshotów</span>
            </div>
            <div className='flex justify-center items-center'>
                <h1 className='text-7xl font-bold'>15</h1><span className='m-1 text-2xl'>banów permamentnych</span>
            </div>
            <div className='absolute bg-white w-36 h-36 -right-5 -top-5 rounded-full opacity-10' />
        </div>
    )
}
