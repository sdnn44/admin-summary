import React from 'react'
import { DataTable } from '@/app/bans/data-table';
import { columns } from '@/app/bans/columns';
import ProfileCard from '@/app/components/Card/ProfileCard';
import BanCard from '@/app/components/Card/BanCard';
import { PlaytimeType } from '@/app/types/PlaytimeType';
import { BanType } from '@/app/types/BanType';
import axios from 'axios';

async function getAdminData(adminNickname: string) {
    const res = await axios.get(`http://strefaskilla-helper.vercel.app/api/admins/${adminNickname}`);
    return res.data;
}

async function getAdminPlaytime(adminNickname: string) {
    const res = await axios.get(`http://strefaskilla-helper.vercel.app/api/playtimes/${adminNickname}`);
    return res.data;
}

export default async function AdminDetails({ params }: { params: { nickname: string } }) {

    const adminData = await getAdminData(params.nickname);
    const adminPlaytime: PlaytimeType[] = await getAdminPlaytime(params.nickname);
    console.log(adminPlaytime);
    const getNumberOfAdminBans = () => {
        return adminData.length;
    }

    const getNumberOfGivenDemos = () => {
        let numberOfGivenDemos = adminData.filter((ban: BanType) => {
            const reasonLower = ban.Reason ? ban.Reason.toLowerCase() : "";
            return reasonLower.includes("demko") || reasonLower.includes("demo") || reasonLower.includes("pov");
        }).length;
        return numberOfGivenDemos;
    }

    const getNumberOfGivenScreenshots = () => {
        let numberOfGivenScreenshots = adminData.filter((ban: BanType) => {
            const reasonLower = ban.Reason ? ban.Reason.toLowerCase() : "";
            return reasonLower.includes("wstaw_screeny") || reasonLower.includes("screenshooty");
        }).length;
        return numberOfGivenScreenshots;
    }

    return (
        <div className='md:h-screen p-4 md:flex md:flex-col'>
            <div className='flex flex-col md:flex-row w-full md:h-1/3 gap-6 md:gap-3'>
                <BanCard playtime={adminPlaytime} adminNickname={params.nickname}/>
                <ProfileCard numberOfGivenBans={getNumberOfAdminBans()} numberOfGivenDemos={getNumberOfGivenDemos()} numberOfGivenScreenshots={getNumberOfGivenScreenshots()} />
            </div>
            <div className='w-full h-1/2'>
                <section className='py-4 md:py-24'>
                    <div className='container'>
                        <DataTable columns={columns} data={adminData} />
                    </div>
                </section>
            </div>
        </div>
    )
}