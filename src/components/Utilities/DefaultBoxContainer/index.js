const DefaultBoxContainer = ({children}) => {
    return(
        <div className="relative  bg-[#d9d9d9]/10 bg-linear-to-br from-white/35 via-white/10 rounded-3xl shadow-xl backdrop-blur-2xl pt-4 px-4">
        {children}
        </div>
    )
}

export default DefaultBoxContainer;