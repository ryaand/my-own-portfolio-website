import Image from 'next/image';
import furina1 from '@/public/Images/furina1.svg';
import logo from '@/public/Images/logo.svg'
import MyProjectButton from '../Utilities/MyProjectButton';

const HeroSection = () => {
    return (
        <section className='mx-auto max-w-360 flex items-center'>
            <div className='flex-col w-screen h-screen md:justify-center md:flex-row-reverse md:px-[10%] flex items-center justify-center gap-10'>
                <div className=''>
                    <Image alt='' width={350} draggable={false} src={furina1} className='md:w-125 pointer-events-none'></Image>
                </div>
                <div className='w-full md:w-1/2 md:items-baseline flex-col flex items-center gap-1.5'>
                    <div className='flex gap-1 bg-linear-to-r from-3/50 to-3/35 py-0.5 px-2.5 rounded-full text-5 text-[10px] md:text-[15px] font-extralight'>
                        <Image draggable={false} className='pointer-events-none md:w-3.75' alt='' width={10} src={logo}></Image>
                        Website Development
                    </div>
                    <p className='text-[30px]/8 text-3 font-bold text-center md:text-left md:text-[35px] lg:text-[55px]/13'>Hello, <a className='text-2'>I'am Rian</a>,<br></br>Front-End Developer<br></br>Based in Indonesia.</p>
                    <p className='font-light text-3 text-[15px] px-[15%] pb-3 text-center md:text-left md:pl-0.5 lg:pr-[30%]'>An 18 years old front-end developer dedicated to continuous improvement, actively deepening skills in UI/UX design and full-stack development.</p>
                    <MyProjectButton></MyProjectButton>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;