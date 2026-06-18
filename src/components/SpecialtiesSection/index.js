import DefaultBoxContainer from "../Utilities/DefaultBoxContainer";
import Image from "next/image";
import FrontEnd from "@/public/Images/computer.svg"
import UiUx from "@/public/Images/layer.svg"

const SpecialtiesSection = () => {
    return (
        <section className="mx-auto max-w-360">
            <div className="pt-15 flex-col items-center">
                <div className="flex flex-col items-center pb-5 pt-15">
                    <div className="font-bold text-primary text-xl">My Spescialties</div>
                    <div className="font-extralight text-gray-500">I am competent at</div>
                </div>
                <div className="flex flex-col items-center gap-7 text-primary lg:flex-row lg:justify-center">
                    <div className="flex">
                        <DefaultBoxContainer>
                            <div className="flex flex-col justify-center p-10 gap-2 w-85 h-60">
                                <div>
                                    <Image src={FrontEnd} alt="" width={30} className="pointer-events-none"></Image>
                                </div>
                                <div className="whitespace-pre-line font-black  text-2xl">
                                    Front-End <br /> Development
                                </div>
                                <div className="font-extralight">
                                    Memiliki kompetensi mendalam<br />dalam pengembangan front-end<br /> web.
                                </div>
                            </div>
                        </DefaultBoxContainer>
                    </div>
                    <div className="flex">
                        <DefaultBoxContainer>
                            <div className="flex flex-col justify-center p-10 gap-2 w-85 h-60">
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
            </div>
        </section>
    )
}

export default SpecialtiesSection;