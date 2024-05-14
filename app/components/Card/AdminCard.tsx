import React from 'react'
import Image from 'next/image';
import { useGlobalState, useGlobalUpdate } from '@/app/context/globalContextProvider';
import { AdminType } from '@/app/types/AdminType';

interface Prop {
    admin: AdminType;
    index: number;
}

function AdminCard({ admin, index }: Prop) {

    const { setSearchedAdmin, setIsLoading } = useGlobalState();
    const { getSpecificAdmin, getSpecificAdminPlaytime } = useGlobalUpdate();

    return (
        <div
            className='w-full flex flex-row m-1 hover:bg-violet-700/15 cursor-pointer gap-3 items-center p-2'
            onClick={() => {
                localStorage.setItem('specificAdmin', JSON.stringify(admin));
                localStorage.setItem('specificAdminPlaytime', JSON.stringify(admin));
                getSpecificAdmin(admin.nickname);
                getSpecificAdminPlaytime(admin.nickname);
                setSearchedAdmin(admin);
                setIsLoading(true);
            }
            }>
            <Image src={admin.img} width={50} height={50} className="flex rounded-full" alt={''} />
            <div className='flex flex-col'>
                <div className="flex items-center">
                    <span className="font-semibold">{admin.nickname}</span>
                    {/* <Image src="/steam.png" width={50} height={50} className="w-6 h-6 mx-2" alt={''} /> */}
                    {/* <span className='uppercase text-[10px]'>{streamer.broadcaster_language}</span> */}
                    {/* {streamer.is_live && <><div className='ml-4 w-[7px] h-[7px] rounded-2xl bg-rose-700 border-2 border-rose-700'></div><span className='m-1 uppercase text-[10px] text-red-700'>Live</span></>} */}
                </div>
                <div className="flex text-[12px] font-semibold text-[#8884d8]">
                    {admin.status}
                </div>
            </div>
        </div>
    )
}

export default AdminCard