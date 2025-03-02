import { IoLocationSharp } from "react-icons/io5";

export function HeroSection() {
    return (
        <section 
            className="w-full  px-5 h-lvh text-text flex justify-center items-center flex-col bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('public/img/map.png')" }}
        >
            <div className="gap-3 w-3/5 flex flex-col items-center justify-center">
                <h1 className="xl:text-4xl font-semibold">Temukan Lokasi Strategis untuk Usaha Anda!</h1>
                <p className="text-center">Kami membantu Anda menentukan lokasi terbaik untuk memulai atau mengembangkan usaha F&B berdasarkan analisis data yang mendalam.</p>
                <div className="gap-5 flex mt-10">
                    <button className="hover:scale-90 transition-all duration-200 border-secondary border text-primary font-semibold px-3 py-1 rounded-md bg-hover">Mulai Analisis</button>
                    <button className="hover:scale-90 transition-all duration-200 border-secondary border text-hover px-3 py-1 rounded-md bg-secondary font-semibold">Pelajari Lebih Lanjut</button>
                </div>
            </div>

            <IoLocationSharp className="absolute top-24 text-text left-20 text-3xl"/>
            <IoLocationSharp className="absolute top-32 text-text right-52 text-3xl"/>
            <IoLocationSharp className="absolute top-40 text-text right-96 text-3xl"/>
            <IoLocationSharp className="absolute top-96 text-text left-96 text-3xl"/>
            <IoLocationSharp className="absolute top-20 text-text left-[29rem] text-3xl"/>
        </section>
    );
}
