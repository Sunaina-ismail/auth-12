import React from 'react'
import Image from 'next/image'

import {

    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { useSession } from 'next-auth/react';
import SignOutComponent from './login/logoutcomponent';

const Navbar = () => {
  const {data:session} = useSession()
  const isAuthenticated = !!session?.user;
  const image = session?.user?.image;
  const name = isAuthenticated?session?.user?.name : "UnKnown"
  return (
    <header className='absolute top-0 left-0 right-0 flex justify-between items-center p-4  bg-white bg-opacity-45'  >
        <h1 className=' md:px-10 text-blue-600 font-serif font-bold text-xl md:text-3xl'>MedCare</h1>
       <div className='text-xs md:text-md flex items-center justify-between gap-x-1 font-serif font-smibold md:gap-x-4'>
        <span className='max-w-[60px]'>
          {name}
        </span>

        <div className='z-50'>
<div className="rounded-full w-8 h-8 md:w-12 md:h-12 relative overflow-hidden">
              <DropdownMenu>
  <DropdownMenuTrigger> 
  {isAuthenticated && (<Image
            src={`${image}`}
            alt="spagmo-image"
            fill
            style={{ objectFit: "cover" }}
            className="w-full h-full"
          />)}
                 
        </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <hr />
    <DropdownMenuItem><SignOutComponent/></DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>       
       </div>
      </div>
      </div>
    </header>
  )
}

export default Navbar