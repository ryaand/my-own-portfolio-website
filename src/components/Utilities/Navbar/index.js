'use client'

import Image from "next/image"
import logo from "@/public/Images/logo.svg"
import humberger_active from "@/public/Images/close.svg"
import humberger from "@/public/Images/humberger.svg"
import Link from "next/link"
import { useState } from "react"
import MyProjectButton from "../MyProjectButton"

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    return (
        <>
            <nav className="bg-white/10 rounded-[15] flex justify-between py-4 px-10 sm:px-5 items-center backdrop-blur-xs fixed text-2 font-medium shadow-xl my-8 inset-x-0 mx-auto w-[90%] sm:w-150 z-0">
                <Link className="flex font-bold text-lg text-2 gap-x-2" href="/">
                    <Image src={logo} width={20} alt="logo"></Image>
                    RianArchive
                </Link>

                <div className="gap-5 hidden sm:flex text-sm">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                    <MyProjectButton></MyProjectButton>
                </div>

                <div onClick={() => setToggleNavbar(toggleNavbar ? false : true)} className="sm:hidden">
                    <Image src={humberger} width={25

                    } alt="negro`">

                    </Image>
                </div>


            </nav>

            <div className={toggleNavbar ? "block" : "hidden"} >
                <div className="fixed bg-white w-full h-full sm:hidden flex flex-col items-center">
                    <div className="flex items-center w-full py-12 justify-between px-[13%]">
                        <Link className="flex font-bold text-lg text-2 gap-x-2" href="/">
                            <Image src={logo} width={20} alt="logo"></Image>
                            RianArchive
                        </Link>
                        <div onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
                            <Image src={humberger_active} width={25} alt="memek"></Image>
                        </div>
                    </div>
                    <div className="flex-col divide-y flex w-full px-[12%]">
                        <Link className="py-3 pl-2 first:pt-0" href="/about">About</Link>
                        <Link className="py-3 pl-2" href="/">Home</Link>
                        <Link className="py-3 pl-2" href="/contact">Contact</Link>
                        <div className="py-3 pt-5 pl-1"><MyProjectButton></MyProjectButton></div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar