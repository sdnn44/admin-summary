"use client"
import BanCard from '@/app/components/Card/BanCard';
import ProfileCard from '@/app/components/Card/ProfileCard';
import Loader from '@/app/components/Loader/Loader';
import { useGlobalState } from '@/app/context/globalContextProvider'
import { Table } from 'lucide-react';
import { useRouter } from 'next/router';
import React from 'react'

type Props = {}

export default function Dashboard({ }: Props) {
    
    const { isLoading, searchedAdmin } = useGlobalState();

    const router = useRouter();
    const { nickname } = router.query;

    return (
        <div className='h-screen p-4'>
            {searchedAdmin ? (
                isLoading ? <div className='h-full w-full justify-center items-center'><Loader /></div> :
                    <>
                        <div className='flex flex-row w-full h-1/3 gap-3'>
                            <BanCard />
                            <ProfileCard />
                        </div>
                        <div className='w-full h-1/2'>
                            <Table />
                        </div>
                    </>
            ) : (
                <div className='flex items-center justify-center h-full'>
                    <h2 className='text-3xl opacity-50'>Wybierz admina z listy, żeby wyświetlić jego statystyki.</h2>
                </div>
            )
            }
        </div>
    )
}