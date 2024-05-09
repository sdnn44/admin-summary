"use client";
import { columns } from '@/app/bans/columns';
import { DataTable } from '@/app/bans/data-table';
import { db } from '@/app/utils/firebase';
import { Ban } from '@/types/Ban';
import { get, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react'

export default function Table() {

    const [adminData, setAdminData] = useState<Ban[]>([]);
    // const [bannedUsers, setBannedUsers] = useState<any[]>([]);

    useEffect(() => {
        const adminRef = ref(db, 'admins/newbansdd2/Przyjaciel')
        get(adminRef).then((snapshot) => {
            if (snapshot.exists()) {
                // console.log(snapshot.val())
                const adminObject: Record<string, Ban> = snapshot.val();
                const adminArray = Object.entries(adminObject).map(([id, data]) => ({
                    id,
                    ...data,
                }));
                console.log(adminArray);
                setAdminData(adminArray);
            } else {
                console.log("No data avaiable");
            }
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    return (
        <section className='py-24'>
            <div className='container'>
                <DataTable columns={columns} data={adminData} />
            </div>
        </section>
    );
}
