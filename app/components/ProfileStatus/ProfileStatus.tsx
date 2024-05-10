import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
type Props = {}

export default function ProfileStatus({}: Props) {
  return (
    <div className='flex flex-row justify-center items-center gap-3'>
        <Image src={'/avatar.jpg'} width={50} height={50} alt='avatar' className="rounded-xl"/> 
        <div>
            <h2>slajden owski</h2>
            <span>Premium member - ONLINE</span>
        </div>
        <FaAngleDown size={20}/>
    </div>
  )
}