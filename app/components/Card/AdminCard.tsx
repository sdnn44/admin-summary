import React from 'react'
import Image from 'next/image';
import { useGlobalState, useGlobalUpdate } from '@/app/context/globalContextProvider';
import { AdminType } from '@/app/types/AdminType';
import { BanType } from '@/app/types/BanType';

interface Prop {
    admin: AdminType;
    index: number;
}

function StreamerCard({ admin, index }: Prop) {

    const { setSearchedAdmin, setIsLoading } = useGlobalState();
    const { getSpecificAdmin, getSpecificAdminPlaytime } = useGlobalUpdate();

    return (
        <div
            className='w-full flex flex-row m-1 hover:bg-violet-700/15 cursor-pointer gap-3 items-center p-2'
            onClick={() => {
                // setGameId(game.game_id);
                // setStreamerId(streamer.id);
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
                    <Image src="/steam.png" width={5} height={5} className="w-3 h-3 mx-2" alt={''} />
                    {/* <span className='uppercase text-[10px]'>{streamer.broadcaster_language}</span> */}
                    {/* {streamer.is_live && <><div className='ml-4 w-[7px] h-[7px] rounded-2xl bg-rose-700 border-2 border-rose-700'></div><span className='m-1 uppercase text-[10px] text-red-700'>Live</span></>} */}
                </div>
                <div className="flex text-[10px]">
                    {admin.steamURL}
                </div>
            </div>
        </div>
    )
}

export default StreamerCard