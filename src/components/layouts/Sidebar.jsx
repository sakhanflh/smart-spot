export function Sidebar({ onShowSidebar }) {
    return (
        <div className={`h-lvh w-52 xl:hidden z-40 bg-primary translate-y-[22rem] transition-all duration-500 ${onShowSidebar ? '-translate-x-20' : ' -translate-x-96'}`}>

        </div>
    )
}