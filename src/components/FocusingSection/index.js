import Image from "next/image";
import furina2 from "@/public/Images/furina2.svg"

const FocusingSection = () => {
    return (
        <div className="flex flex-col md:px-[10%] md:justify-center">
            <div className="ml-10 pl-2 font-bold text-2 border-l-[4px] border-3">
                Focusing
            </div>
            <div className="flex flex-col items-center md:flex-row md:justify-between ">
                <Image src={furina2} className="w-70 py-10 lg:w-90 -rotate-15" alt=""></Image>
                <p className="px-15 text-center lg:text-xl md:text-right">
                    Fokus utama saya adalah membangun arsitektur front-end yang skalabel menggunakan ekosistem Next.js dan Tailwind CSS. Saya memastikan setiap baris kode yang ditulis tidak hanya menghasilkan visual yang presisi, tetapi juga mengutamakan optimasi kecepatan akses, skor Core Web Vitals yang tinggi, dan struktur yang ramah SEO. Bagi saya, performa adalah fondasi dari pengalaman pengguna yang superior.
                </p>
            </div>
        </div>
    )
}

export default FocusingSection;