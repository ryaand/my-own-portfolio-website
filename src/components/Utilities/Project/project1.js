import Image from "next/image";
import uiProject from "@/public/Images/Prototype.png"
import Link from "next/link";

const Project1 = () => {
    return (
        <div className="w-90 h-65 bg-[#d9d9d9]/10 bg-linear-to-br from-white/35 via-white/10 rounded-3xl shadow-xl backdrop-blur-2xl pt-4 px-4 flex-col justify-center -z-10 hover:scale-101 transform duration-250 ease-in-out">
            <Link href="https://drive.google.com/file/d/1lqOqszyivCCP-Xx_yUzXEtn_Hol0MsLK/view?usp=sharing">
                <Image src={uiProject} alt="" className="w-full object-cover object-top h-[70%] rounded-2xl">
                </Image>
                <div>
                    <p className="font-bold pl-2 pt-2">UI/UX Project</p>
                    <p className="font-extralight pl-2 pb text-sm">Figma prototype design</p>
                </div>
            </Link>
        </div>
    )
}

export default Project1;