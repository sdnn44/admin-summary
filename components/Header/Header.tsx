import ProfileStatus from "../ProfileStatus/ProfileStatus";
import Searchbar from "../Searchbar/Searchbar";

type Props = {}

export default function Header({ }: Props) {
  return (
    <div className='flex flex-row items-center bg-[#38373e] h-16'>
      <div className='flex justify-between mx-5 items-center gap-10 w-full'>
        <p className='text-xl font-bold text-white'>ADMIN DASHBOARD</p>
        <div className='flex justify-between items-center gap-10'>
          <Searchbar />
          <ProfileStatus />
        </div>
      </div>
    </div>
  )
}