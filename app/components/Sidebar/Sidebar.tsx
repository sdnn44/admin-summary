"use client";
import { sidebarItems } from '../../utils/sidebar-items.js';
import { RiCrosshair2Fill } from "react-icons/ri";
import adminData from '@/app/utils/admins-data';
import Image from 'next/image.js';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

type Props = {}

export default function Sidebar({ }: Props) {
    return (
        <div className="w-40 bg-[#020817] hidden md:flex flex-col border-r-2">
            <div className='flex items-center h-full flex-col gap-5 my-20'>
                <AnimatedTooltip items={adminData} />
            </div>
        </div>
    )
}