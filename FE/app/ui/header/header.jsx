import React from 'react'
import Link from 'next/link'
import { MdLogout } from "react-icons/md";

const header = () => {
  return (
    
    <header className='p-4 m-5 flex justify-end'>
      <div className='flex flex-col pt-1 h-12 w-28 items-center text-end'> 
          <span className=''>Hello, </span>
          <span className='font-strong'>Admin Admin</span>
      </div>
      <Link href={"/"}>
        <div className='flex items-center text-lg pl-2 mt-2 p-1 hover:bg-slate-500 rounded-full'>
          <MdLogout
            size={30}
          />
        </div>
      </Link>
    </header>
    
  )
}

export default header