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
            <nav className="bg-white/10 z-50 select-none rounded-[15] flex justify-between py-4 px-10 sm:px-5 items-center backdrop-blur-xs fixed text-2 font-medium shadow-xl my-8 inset-x-0 mx-auto w-[90%] sm:w-150 z-0">
                <Link className="flex font-bold text-lg text-2 gap-x-2" href="/">
                    <Image draggable={false} className="pointer-events-none" src={logo} width={20} alt="logo"></Image>
                    RianArchive.
                </Link>

                <div className="gap-5 hidden sm:flex text-sm">
                    <Link draggable={false} href="/">Home</Link>
                    <Link draggable={false} href="/about">About</Link>
                    <Link draggable={false} href="/contact">Contact</Link>
                    <MyProjectButton></MyProjectButton>
                </div>

                <div onClick={() => setToggleNavbar(toggleNavbar ? false : true)} className="sm:hidden">
                    <Image draggable={false} src={humberger} width={25

                    } alt="humberger">

                    </Image>
                </div>


            </nav>

            <div className={toggleNavbar ? "block" : "hidden"} >
                <div className="fixed select-none bg-white w-full h-full sm:hidden flex flex-col items-center z-50">
                    <div className="flex items-center w-full py-12 justify-between px-[13%]">
                        <Link draggable={false} className="flex font-bold text-lg text-2 gap-x-2" href="/">
                            <Image draggable={false} src={logo} width={20} alt="logo"></Image>
                            RianArchive.
                        </Link>
                        <div onClick={() => setToggleNavbar(toggleNavbar ? false : true)}>
                            <Image draggable={false} src={humberger_active} width={25} alt="memek"></Image>
                        </div>
                    </div>
                    <div className="flex-col divide-y flex w-full px-[12%]">
                        <Link draggable={false} className="py-3 pl-2 first:pt-0" href="/about">About</Link>
                        <Link draggable={false} className="py-3 pl-2" href="/">Home</Link>
                        <Link draggable={false} className="py-3 pl-2" href="/contact">Contact</Link>
                        <div className="py-3 pt-5 pl-1"><MyProjectButton></MyProjectButton></div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar