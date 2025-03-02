import { Login } from "../fragments/Login";
import { SignIn } from "../fragments/SignIn";
import { Navbar } from "./Navbar";

export function Header() {
    return (
        <header className="w-full xl:max-w-7xl z-50 fixed h-16 bg-[#2C2F36] flex justify-between px-5 items-center text-white">
            <div>
                <h1 className="text-2xl font-semibold">Smart<span className="text-hover">Spot</span></h1>
            </div>
            <Navbar />
            <div className="flex gap-2">
                <SignIn/>
                <Login/>
            </div>
        </header>
    )
}