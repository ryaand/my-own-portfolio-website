import Project1 from "../Utilities/Project/project1";
import Project2 from "../Utilities/Project/project2";
import Project3 from "../Utilities/Project/project3";

const ProjectSection = () => {
    return (
        <section className="mx-auto max-w-360 flex items-center">
            <div className="flex md:px-[10%] flex-col w-screen md:justify-center pt-10 lg:pt-20">
                <div className="ml-10 pl-2 font-bold text-primary border-l-[4px] border-3 text-xl">
                    Project
                </div>
                <div className="flex justify-center pt-5">
                    <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
                        <div>
                            <Project1></Project1>
                        </div>
                        <div>
                            <Project2></Project2>
                        </div>
                        <div>
                            <Project3></Project3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;