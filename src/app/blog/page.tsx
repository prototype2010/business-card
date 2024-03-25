'use client'

import {useState} from "react";
import WidgetCard from "@/app/components/WidgetCard";
import ModalSideBar from "@/app/components/ModalSideBar";
import NavScrollBar from "@/app/components/NavScrollBar";
import ArrowPageUp from "@/app/components/ArrowPageUp";
import Header from "@/app/components/Header";
import BlogContent from "@/app/components/BlogContent";
import BlogModal from "@/app/components/modal/BlogModal";
import ErrorCard from "@/app/components/ErrorCard";


export const faqs = [
    {
        id: 1,
        header: 'What are the most challenging tasks on iOS',
        text: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eniconsectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla enim, sit amet suscipit dolor dictum in'
    },
    {
        id: 2,
        header: 'What are my favorite frameworks and libs',
        text: 'Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'tetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla enim, sit amet suscipit dolor dictum in'
    },
    {
        id: 3,
        header: 'What kind of mistakes usual for iOS devs?',
        text: 'Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'tetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla enim, sit amet suscipit dolor dictum in'
    },
    {
        id: 4,
        header: 'Are there any advices for iOS dev beginners?',
        text: 'Lorem ipsum dolor sit amet, consLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eni' +
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla eniectetur adipiscing elit. Aliquam sit amet purus urna. Proin dictum fringilla enim, sit amet suscipit dolor dictum in'
    },
]

const Blog = () => {
    const [ isSideBarShown, setSideBarShown ] = useState<boolean>(false);


    return (
        <>
            <Header setSideBarShown={setSideBarShown}/>
            <div className={'container mx-auto max-w-screen-2xl'}>
                <div className={'flex'}>
                    <div>
                        <div className={'sticky top-0'}>
                            <div className={'ml-8 bg-mainColor h-[395px]'}>
                                <WidgetCard/>
                            </div>
                            <div className={'ml-8 bg-secondColor w-[290px] h-[130px] text-center'} >
                                <button className={'bg-black text-white rounded-full text-xl mt-10 px-2 py-2 hover:opacity-60'}>DOWNLOAD CV</button>
                            </div>
                        </div>
                    </div>
                    <div className={'w-[848px]'}>
                        <BlogContent/>
                    </div>
                    <div className={'flex-initial'}>
                        <NavScrollBar/>
                    </div>
                </div>
            </div>
            <svg className={'hidden-sm hidden-xs h-[519px] w-[758px] fill-gray-900 absolute top-0 left-0 -z-50'}>
                <polygon points={'0,455,693,352,173,0,92,0,0,71'}></polygon>
            </svg>
            <ArrowPageUp/>
            <div className={'hidden-sm hidden-xs h-[100%] absolute top-0 right-0 '}>
                <svg className={'h-[536px] w-[633px] fill-mainColor fixed top-0 right-0 -z-50'}>
                    <polygon points={'0,0,633,0,633,536'}></polygon>
                </svg>
            </div>
            { isSideBarShown && <ModalSideBar setSideBarShown={setSideBarShown} children={<BlogModal/>}/> }
        </>

    );
}
export default Blog
