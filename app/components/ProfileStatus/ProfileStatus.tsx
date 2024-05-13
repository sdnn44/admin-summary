import { AdminType } from "@/app/types/AdminType";
import Image from "next/image";
import DropdownActions from "./DropdownActions";

type Props = {
  user: AdminType;
}

export default function ProfileStatus({ user }: Props) {
  const { img, nickname, status, steamURL, csarchiveURL, strefaskillaURL } = user;
  return (
    <div className='flex flex-row justify-center items-center gap-4 min-w-64 h-full'>
      <Image src={`${img}`} width={50} height={50} alt='avatar' className="rounded-xl" />
      <div>
        <h2 className="font-bold whitespace-nowrap">{nickname}</h2>
        <span className="text-sm text-[#8884d8]">{status}</span>
      </div>
      <DropdownActions steamURL={steamURL} csarchiveURL={csarchiveURL} strefaskillaURL={strefaskillaURL} />
    </div>
  )
}