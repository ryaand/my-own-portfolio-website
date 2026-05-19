import Link from "next/link";

const MyProjectButton = () => {
    return (
        <div>
            <Link draggable={false} className="bg-linear-to-r -z-50 from-3/80 to-3/55 backdrop-blur-2xl p-2.5 px-4 rounded-full text-5 hover:from-3/55 hover:to-3/80 duration-400 transition" href="/MyProject" >
                My Project
            </Link>
        </div>
    )
}

export default MyProjectButton;