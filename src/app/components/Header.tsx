'use client'

import Image from 'next/image';
import Link from "next/link";

const Header = (props) => {
    const {setSideBarShown} = props

    const handleShowSideBar = () => {
        setSideBarShown(true);
        document.body.style.overflow = 'hidden';
    }

    return(
        <header className={'w-[100%] h-[90px] flex justify-start items-center re'}>
            <div className={'flex container mx-auto max-w-2xl ml-[34.2%]'}>
                <div className={'flex justify-start cursor-pointer'}>
                    <Image src="/logo.png" width="40" height="40" alt={'logo'}/>
                    <span className={'text-xl text-white text-2xl font-bold ml-2'}>.Developer</span>
                </div>
                <div className={'flex ml-[50%] cursor-pointer'}>
                    <nav>
                        <ul className={'flex space-x-8 font-bold pl-[28%]'}>
                            <li className={'text-xl text-white hover:opacity-60'}>
                                <Link href='/'>Home</Link>
                            </li>
                            <li className={'text-xl text-white hover:opacity-60'}>
                                <Link href='/blog'>Blog</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={'absolute top-4 right-24'}>
                <button
                    className={'text-white w-12 h-12 bg-secondColor rounded-full flex justify-center items-center'}
                    onClick={handleShowSideBar}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8 hover:opacity-60">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    )
}

export default Header;
