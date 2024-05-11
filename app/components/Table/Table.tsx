"use client";
import { columns } from '@/app/bans/columns';
import { DataTable } from '@/app/bans/data-table';
import { useGlobalState, useGlobalUpdate } from '@/app/context/globalContextProvider';
import { BanType } from '@/app/types/BanType';
import { db } from '@/app/utils/firebase';
import { get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'

export default function Table() {

    const { admin, getNumberOfAdminBans } = useGlobalState();
    const { getSpecificAdmin } = useGlobalUpdate();

    // const [adminData, setAdminData] = useState<BanType[]>([]);
    // // const [bannedUsers, setBannedUsers] = useState<any[]>([]);

    // useEffect(() => {
    //     const adminRef = ref(db, 'admins/newbansdd2/Przyjaciel')
    //     get(adminRef).then((snapshot) => {
    //         if (snapshot.exists()) {
    //             // console.log(snapshot.val())
    //             const adminObject: Record<string, BanType> = snapshot.val();
    //             const adminArray = Object.entries(adminObject).map(([id, data]) => ({
    //                 id,
    //                 ...data,
    //             }));
    //             // console.log(adminArray);
    //             setAdminData(adminArray);
    //         } else {
    //             console.log("No data avaiable");
    //         }
    //     }).catch((err) => {
    //         console.log(err);
    //     })
    // }, []);
    useEffect(() => {
        // getSpecificAdmin('Przyjaciel');
    }, []);
    // console.log(admin);
    const numberOfBans = getNumberOfAdminBans();
    // console.log(numberOfBans);

    return (
        <section className='py-24'>
            <div className='container'>
                <DataTable columns={columns} data={admin} />
            </div>
        </section>
    );
}
