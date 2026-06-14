import DefaultBoxContainer from "../Utilities/DefaultBoxContainer";

const SpecialtiesSection = () => {
    return (
        <div className="pt-5">
            <div className="flex flex-col items-center">
                <div className="font-bold text-primary text-xl">My Spescialties</div>
                <div className="font-extralight text-gray-500">I am competent at</div>
            </div>
            <div className="flex flex-col items-center p-4 gap-7">
                <DefaultBoxContainer></DefaultBoxContainer>
                <DefaultBoxContainer></DefaultBoxContainer>
            </div>
        </div>
    )
}

export default SpecialtiesSection;