'use client'
import { signOut } from "next-auth/react";

export default function SignOutComponent(){

    return (

        <><span onClick={()=>signOut()}>Sign out</span></>
    )
}