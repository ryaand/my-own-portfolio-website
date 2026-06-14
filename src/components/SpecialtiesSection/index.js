import DefaultBoxContainer from "../Utilities/DefaultBoxContainer";
import Image from "next/image";
import FrontEnd from "@/public/Images/computer.svg"
import UiUx from "@/public/Images/layer.svg"

const SpecialtiesSection = () => {
    return (
        <div className="pt-10">
            <div className="flex flex-col items-center">
                <div className="font-bold text-primary text-xl">My Spescialties</div>
                <div className="font-extralight text-gray-500">I am competent at</div>
            </div>
            <div className="flex flex-col items-center pt-10 gap-7 text-primary lg:flex-row lg:justify-center w-full">
                <DefaultBoxContainer>
                    <div className="flex flex-col gap-3 pt-4 pl-5 w-90 h-65">
                        <Image src={FrontEnd} alt="" width={30} className="pointer-events-none"></Image>
                        <div className="whitespace-pre-line font-black  text-2xl">
                            Front-End <br /> Development
                        </div>
                        <div className="font-extralight">
                            Memiliki kompetensi mendalam<br/>dalam pengembangan front-end<br/> web.
                        </div>
                    </div>
                </DefaultBoxContainer>
                <DefaultBoxContainer>
                    <div className="flex flex-col gap-4 pl-5 pt-7 w-90 h-65">
                        <Image src={UiUx} alt="" width={30} draggable={false} className="pointer-events-none"></Image>
                        <div className="whitespace-pre-line font-black  text-2xl">
                            UI/UX Designer
                        </div>
                        <div className="font-extralight">
                            Memiliki kompetensi mendalam<br />dalam pengembangan front-end<br /> web.
                        </div>
                    </div>
                </DefaultBoxContainer>
            </div>
        </div>
    )
}

export default SpecialtiesSection;