import ProfileStatus from "../ProfileStatus/ProfileStatus";
import Searchbar from "../Searchbar/Searchbar";

type Props = {}

export default function Header({ }: Props) {
  return (
    <div className='flex flex-row bg-[#020817] border-b-2 h-16'>
      <div className='flex justify-between mx-5 gap-10 w-full'>
        <p className='text-xl font-bold text-white self-center tracking-widest'>ADMIN DASHBOARD</p>
        <div className='flex justify-between gap-16 p-3'>
          <Searchbar />
          <ProfileStatus />
        </div>
      </div>
    </div>
  )
}