import Link from "next/link";

const MyProjectButton = () => {
    return (
        <div>
            <Link className="bg-gradient-to-r from-3/80 to-3/55 backdrop-blur-2xl p-2.5 px-4 rounded-full text-size- text-5" href="/MyProject" >
                My Project
            </Link>
        </div>
    )
}

export default MyProjectButton;