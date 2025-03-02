import { useState } from "react";
import { Login } from "../fragments/Login";
import { SignIn } from "../fragments/SignIn";
import { Navbar } from "./Navbar";
import { CgMenuLeftAlt } from "react-icons/cg";
import { Sidebar } from "./Sidebar";


export function Header() {
    const [showSidebar, setShowSidebar] = useState(false)
    function handleShowSidebar(){
        setShowSidebar(!showSidebar)
        console.log('first')
    }
    return (
        <header className="w-full xl:max-w-7xl z-50 fixed h-16 bg-[#2C2F36] flex justify-between px-5 items-center text-white">
            <CgMenuLeftAlt className="xl:hidden text-2xl" onClick={handleShowSidebar}/>
            <Sidebar onShowSidebar={showSidebar}/>
            <div>
                <h1 className="text-xl xl:text-2xl font-semibold">Smart<span className="text-hover">Spot</span></h1>
            </div>
            <Navbar />
            <div className="xl:flex gap-2 hidden">
                <SignIn />
                <Login />
            </div>
        </header>
    )
}