import Image from 'next/image'
import React from 'react'
import SignInComponent from './login/logincomponent'

const SignIn = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 h-screen w-full bg-slate-100">
      
      <div className="relative h-full hidden sm:block">
        <Image
          src="/spegmo.png"
          alt="login"
          layout="fill"
          objectFit="cover"
          className=" bg-blue-300 w-80 h-70"
        />
          <div className="absolute w-full  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
      <h1 className="text-5xl 0 font-bold">Welcome to MedCare</h1>
      <p className="max-w-sm mx-auto mt-4 text-2xl">Your trusted platform for seamless login.</p>
    </div>
      </div>

      {/* Right section - Sign-in form */}
      <div className="relative inset-0 bg-image h-screen flex flex-col justify-center items-center p-8 space-y-12 md:bg-none md:bg-slate-100 "
      >
        <div className="content flex flex-col items-center text-center gap-y-2  ">
          <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#3c3cc3]">Welcome</h1>
          <span className="text-lg md:text-xl text-black">Enter your email to log in</span>
        </div>

        {/* Form */}
        <form className="lg:space-y-12 space-y-8 w-full max-w-lg">        
          <input
            type="email"
            placeholder="Email"
            className="font-serif w-full px-5 py-3 sm:p-3 lg:py-3 md:p-3 sm:py-2 border-b-2 hover:border-2 focus:ring-[#4749b1] focus:border-b-0 border-b-[#3b46a6] rounded-full focus:outline-none focus:ring-2 border-t-0"
        
          />
        
          <input
            type="password"
            name="pass"
            placeholder="Password"
            id="pass"
            className="font-serif w-full px-5 py-3 sm:p-3 lg:py-3 md:p-3 sm:py-2  border-b-2 border-b-[#3b46a6] rounded-full focus:outline-none focus:ring-[#4749b1] focus:border-b-0 focus:ring-2 border-t-0"
          />
          <button
            type="submit"
            className="text-2xl w-full px-5 py-2 sm:p-3 lg:py-3 md:p-3 sm:py-2 bg-[#3c3cc3] text-white rounded-full hover:bg-[#2727ae] transition"
          >
            Log In
          </button>
        </form>

       <SignInComponent/>

        {/* Log-in Link */}
        <div className="text-center sm:text-gray-600">
        Haven&apos;t signed up yet:{" "}
          <span className="text-[#2a3398] font-serif font-bold cursor-pointer">Sign Up</span>
        </div>
      </div>
    </div>
  )
}

export default SignIn;