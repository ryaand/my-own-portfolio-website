import Image from "next/image";
import furina2 from "@/public/Images/furina2.svg"

const FocusingSection = () => {
    return (
        <section className="mx-auto max-w-360 flex items-center">
            <div className="flex md:px-[10%] flex-col w-screen md:justify-center">
                <div className="ml-10 pl-2 font-bold text-primary border-l-[4px] border-3 text-xl">
                    About Me
                </div>
                <div className="flex flex-col items-center md:justify-between md:flex-row">
                    <div className="">
                        <Image src={furina2} draggable={false} width={250} className="py-10 lg:w-90 -rotate-15 pointer-events-none" alt=""></Image>
                    </div>
                    <div className="px-15 text-center lg:text-xl md:text-right md:w-3/4 text-primary font-extralight">
                        <p className="text-[17px]">
                            I am an Informatics Engineering student at Politeknik Negeri Malang with a strong interest in Front-End Development. I am particularly drawn to minimalist, clean, and user-focused design approaches that emphasize clarity and usability.
                            <br></br>
                            <br></br>
                            Currently, I am continuously developing my skills in building digital interfaces that are not only functional but also intuitive and enjoyable to use. I believe that great technology should solve problems in a simple and understandable way.
                            <br></br>
                            <br></br>
                            Moto: simple, minimalist.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FocusingSection;