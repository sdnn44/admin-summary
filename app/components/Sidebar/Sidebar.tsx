"use client";
import { sidebarItems } from '../../utils/sidebar-items.js';
import { RiCrosshair2Fill } from "react-icons/ri";
type Props = {}

export default function Sidebar({ }: Props) {
    return (
        <div className="h-screen w-16 bg-[#020817] flex flex-col border-r-2">
            {/* <div className='bg-[#7047F9] w-16 h-16 text-white flex items-center justify-center'><RiCrosshair2Fill size={36} /></div> */}
            <div className='flex justify-center items-center h-full'>
                <ul className='nav-items flex flex-col gap-16'>
                    {sidebarItems.map((item) => {
                        const link = item.link;
                        return (
                            <li
                                key={item.id}
                                className=""
                                onClick={() => {
                                    console.log("Klik");
                                    // handleClick(link);
                                }}>
                                {item.icon}
                                {/* <a href={link}>{item.title}</a> */}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}