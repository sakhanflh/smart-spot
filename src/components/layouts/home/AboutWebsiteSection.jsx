import { IoIosArrowRoundForward } from "react-icons/io";
import { AboutSectionCard } from "../../fragments/AboutSectionCard";
import { AboutSectionData } from "../../../data/AboutSectionData";

export function AboutWebsiteSection() {
    return (
        <section className="w-full px-5 h-lvh bg-primary flex items-center justify-center">
            <div className="w-1/2 flex pl-28 flex-col gap-2 justify-center">
                <h1 className="text-2xl">Apa yang Bisa Kami Lakukan untuk Membantu Bisnis Anda Memiliki Lokasi yang Strategis?</h1>
                <p className="text-sm">Kami membantu Anda menemukan lokasi usaha strategis dengan analisis data akurat dan rekomendasi yang sesuai kebutuhan bisnis Anda.</p>
                <button className="flex items-center gap-1 mt-10 transition-all duration-200 w-44 text-hover hover:text-text hover:scale-95">Pelajari Lebih Lanjut <IoIosArrowRoundForward className="text-2xl" /></button>
            </div>

            <div className="w-1/2">
                <div className="w-full flex justify-center flex-wrap gap-3">
                    {AboutSectionData.map((i) => (
                        <AboutSectionCard 
                        key={i}
                        icon={i.icon}
                        tittle={i.tittle}
                        desc={i.desc}
                        bgParents={i.bgParents}
                        bgChild={i.bgChild}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}