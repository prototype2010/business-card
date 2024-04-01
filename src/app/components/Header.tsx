'use client'

import Image from 'next/image';
import Link from "next/link";

interface HeaderProps {
    setSideBarShown: (value: (((prevState: boolean) => boolean) | boolean)) => void
}

const Header = (props: HeaderProps) => {
    const {setSideBarShown} = props

    const handleShowSideBar = () => {
        setSideBarShown(true);
        document.body.style.overflow = 'hidden';
    }

    const scrollContent = (e:React.SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as HTMLElement;
        const id = target.getAttribute('data-scroll') as string;
        const element = document.getElementById(id)
        element?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return(
        <>
            <header className={'w-[100%] h-[100%] xxs:py-2 bg-secondColor lg:bg-transparent'}>
                <div className={'flex justify-center items-center'}>
                    <div className={'flex'}>
                        <div className={'flex xs:p-4'}>
                            <Image src="/logo.png" width="40" height="40" alt={'logo'}/>
                            <span className={'text-xl text-white xs:text-3xl font-bold ml-4 w-[100%] font-pacifico'}>Frontend Developer</span>
                        </div>
                        {/*<div className={'flex invisible lg:visible xl:ml-[70%]'}>*/}
                        {/*    <nav className={'hidden lg:flex justify-center items-center lg:ml-[110%] xxl:ml-[150%]'}>*/}
                        {/*        <ul className={'flex space-x-8 font-bold pl-[28%]'}>*/}
                        {/*            <li className={'text-xl text-white hover:opacity-60'}>*/}
                        {/*                <Link href='/'>Home</Link>*/}
                        {/*            </li>*/}
                        {/*            <li className={'text-xl text-white hover:opacity-60'}>*/}
                        {/*                <Link href='/blog'>Blog</Link>*/}
                        {/*            </li>*/}
                        {/*        </ul>*/}
                        {/*    </nav>*/}
                        {/*</div>*/}
                    </div>
                    {/*<div className={'xxs:mr-[-10%] md:right-[16%] xxs:top-2 absolute top-0 right-14 xs:py-4 lg:right-[20%]'}>*/}
                    {/*    <button*/}
                    {/*        className={'text-white lg:w-12 lg:h-12 bg-secondColor rounded-full flex justify-center items-center'}*/}
                    {/*        onClick={handleShowSideBar}>*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 hover:opacity-60">*/}
                    {/*            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />*/}
                    {/*        </svg>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
                </div>
            </header>
        </>
    )
}

export default Header;
