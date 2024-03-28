'use client'

import Header from "@/app/components/Header";
import WidgetCard from "@/app/components/WidgetCard";
import NavScrollBar from "@/app/components/NavScrollBar";
import {useState} from "react";
import ModalSideBar from "@/app/components/ModalSideBar";
import ErrorCard from "@/app/components/ErrorCard";
import HomeModal from "@/app/components/modal/HomeModal";


const NotFound = () => {
    const [ isSideBarShown, setSideBarShown ] = useState<boolean>(false);

    return (
        <>
            <Header setSideBarShown={setSideBarShown}/>
            <div className={'lg:block container mx-auto max-w-screen-2xl'}>
                <div className={'block lg:flex'}>
                    <div>
                        <div className={'lg:sticky top-0'}>
                            <div className={'lg:ml-8 bg-mainColor h-[395px] pb-6'}>
                                <WidgetCard/>
                            </div>
                            <div className={'lg:ml-8 bg-secondColor lg:w-[290px] lg:h-[130px] text-center'} >
                                <button className={'bg-black text-white rounded-full text-xl mt-10 px-2 py-2 font-rubik hover:shadow-sm hover:shadow-mainColor'}>DOWNLOAD CV</button>
                            </div>
                        </div>
                    </div>
                    <div className={'lg:w-[842px] bg-secondColor lg:bg-transparent pt-10 lg:pt-0'}>
                        <ErrorCard/>
                    </div>
                    <div className={'lg:flex hidden'}>
                        <NavScrollBar/>
                    </div>
                </div>
            </div>
            <svg className={'hidden lg:flex h-[519px] w-[758px] fill-inherit absolute top-0 left-0 -z-50'}>
                <polygon points={'0,455,693,352,173,0,92,0,0,71'}></polygon>
            </svg>
            <div className={'hidden lg:flex h-[100%] absolute top-0 right-0'}>
                <svg className={'h-[536px] w-[633px] fill-mainColor fixed top-0 right-0 -z-50'}>
                    <polygon points={'0,0,633,0,633,536'}></polygon>
                </svg>
            </div>
            { isSideBarShown && <ModalSideBar setSideBarShown={setSideBarShown} children={<HomeModal/>}/> }
        </>
    );
}

export default NotFound;
