import { BsClipboardData } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { GiHumanTarget } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";


export const AboutSectionData = [
    {
        "icon" : <BsClipboardData className="text-2xl "/>,
        "tittle": "Analisis Data Akurat",
        "desc": "Memanfaatkan algoritma fuzzy untuk mengolah data lokasi dengan mempertimbangkan berbagai parameter seperti aksesibilitas, kepadatan penduduk, kompetisi pasar, dan lainnya.",
        "bgParents": "bg-background-color",
        "bgChild": "bg-primary"
    },
    {
        "icon" : <GoGraph className="text-2xl"/>,
        "tittle": "Visualisasi Interaktif",
        "desc": "Hasil analisis disajikan dalam bentuk peta interaktif dan grafik, mempermudah pengguna untuk mengevaluasi lokasi secara visual.",
        "bgParents": "bg-primary",
        "bgChild": ""
    },
    {
        "icon" : <GiHumanTarget className="text-2xl"/>,
        "tittle": "Rekomendasi Berdasarkan Kebutuhan Anda",
        "desc": "Sistem menyesuaikan hasil rekomendasi dengan preferensi dan prioritas Anda, seperti target pelanggan atau jenis usaha.",
        "bgParents": "bg-primary",
        "bgChild": ""
    },
    {
        "icon" : <CgWebsite className="text-2xl"/>,
        "tittle": "Kemudahan Penggunaan",
        "desc": "Antarmuka yang user-friendly memungkinkan siapa pun, termasuk pengguna non-teknis, untuk menggunakan website ini dengan mudah.",
        "bgParents": "bg-background-color",
        "bgChild": "bg-primary"
    },
]