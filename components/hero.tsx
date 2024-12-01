import React from "react";
import Navbar from "./navbar";
import { useSession } from "next-auth/react";
import SignIn from "./signin";

const Hero = () => {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  return (
    <>
      {isAuthenticated ? (
        <>
          <Navbar />
          <div className="relative z-10 flex flex-col items-center md:items-start justify-center text-black text-center md:text-start h-full px-4 md:p-16">
            <div className="max-w-lg md:pt-6 mt-28">
              <h2 className="text-xl font-semibold">
                Welcome to <span className="text-blue-600">MedCare</span>
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold my-4">
              Your care is our priority
              </h1>
              <p className="text-lg md:text-2xl mb-6">
              MedCare is a state-of-the-art medical center offering exceptional healthcare services in a modern, innovative format.
              </p>
            </div>
            <button className="max-w-lg border border-blue-800 px-8 py-2 md:px-15 text-lg bg-blue-600 bg-opacity-20 text-white font-bold rounded-3xl hover:bg-blue-700 transition">
              Book Appointment..!
            </button>
          </div>
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default Hero;
