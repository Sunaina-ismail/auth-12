'use client'
import {signIn} from 'next-auth/react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

export default function SignInComponent() {
    return (
        <div className="flex gap-6 items-center justify-center text-2xl sm:text-3xl md:text-4xl text-gray-700">          
        <button  onClick={() => signIn('google')} className="cursor-pointer bg-blue-200 p-2 rounded-lg">
          <FaGoogle className="lg:text-4xl sm:text-3xl text-black hover:text-[#3d46ac]" />
        </button>
        <button  onClick={() => signIn('github')} className="cursor-pointer bg-blue-200 p-2 rounded-lg">
          <FaGithub className="lg:text-4xl sm:text-3xl text-black hover:text-[#3d46ac]" />
        </button>
      </div>
    )
}