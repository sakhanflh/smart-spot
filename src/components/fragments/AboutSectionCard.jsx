import { BsClipboardData } from "react-icons/bs";

export function AboutSectionCard({ icon, tittle, desc, bgParents, bgChild }) {
    return (
        <div className={`w-56 h-56 p-2 shadow-md rounded-md border gap-2 transition-all duration-200 flex flex-col hover:scale-105 ${bgParents}`}>
            <div className={`border w-10 p-1 flex items-center justify-center rounded-md ${bgChild}`}>
                {icon}
            </div>
            <h2 className="text font-semibold">{tittle}</h2>
            <p className="text-xs">{desc}</p>
        </div>
    )
}