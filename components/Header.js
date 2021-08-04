import React from "react";
import Image from "next/image"
import logo from "../resources/images/airbnb.svg"
import { SearchIcon,MenuIcon,UserCircleIcon,ServerIcon,UserIcon,GlobeAltIcon } from "@heroicons/react/solid";

export const Header=()=> {
    return(
        <header className="sticky top-0 z-50 flex bg-white shadow-md p-5 md:px-8">
            <div className="hidden md:flex md:flex-1 relative items-center h-10 cursor-pointer my-auto ml-5">
                <Image src={logo}
                       layout={"fill"}
                       objectFit={"contain"}
                       objectPosition={"left"}
                />
            </div>

            {/* Middle */}
            <div className={"flex flex-1 justify-center"} >
                <div className="flex items-center justify-center border-2 rounded-full py-0 md:shadow-sm mx-2">
                    <input className="text-gray-600 placeholder-gray-400 h-10 w-60 flex-0 flex-grow pl-5 bg-transparent outline-none" type="text" placeholder="Search"/>
                    <SearchIcon className="h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer mx-2 shadow-md rounded-full font-bold hover:shadow-xl active:scale-90 transition duration-150"/>
                </div>
            </div>

            {/* Right */}
            <div className={"hidden md:flex md:flex-1 md:items-center md:justify-end mx-8 space-x-4"}>
                <p className="hidden lg:inline">Become a host</p>
                <GlobeAltIcon className="h-6"/>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
        </header>
    )
}