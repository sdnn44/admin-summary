import { AdminType } from "@/app/types/AdminType";
import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";

type Props = {
  user: AdminType;
}

export default function ProfileStatus({ user }: Props) {
  const { img, nickname, status } = user;
  return (
    <div className='flex flex-row justify-center items-center gap-3'>
      <Image src={`${img}`} width={50} height={50} alt='avatar' className="rounded-xl" />
      <div>
        <h2>{nickname}</h2>
        <span>{status}</span>
      </div>
      <FaAngleDown size={20} />
    </div>
  )
}