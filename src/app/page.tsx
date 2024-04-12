'use client'

import {useState} from "react";
import WidgetCard from "@/app/components/WidgetCard";
import ModalSideBar from "@/app/components/ModalSideBar";
import NavScrollBar from "@/app/components/NavScrollBar";
import ArrowPageUp from "@/app/components/ArrowPageUp";
import Header from "@/app/components/Header";
import HomeContent from "@/app/components/HomeContent";
import HomeModal from "@/app/components/modal/HomeModal";
import HomeNavMenu from "@/app/components/HomeNavMenu";
import Link from "next/link";


const Home = () => {
    const [ isSideBarShown, setSideBarShown ] = useState<boolean>(false);

  return (
      <>
          {/*<meta property="og:image" content="<generated>" />*/}
          {/*<meta property="og:image:type" content="<generated>" />*/}
          {/*<meta property="og:image:width" content="<generated>" />*/}
          {/*<meta property="og:image:height" content="<generated>" />*/}
          <Header setSideBarShown={setSideBarShown}/>
          <HomeNavMenu/>
          <div className={'lg:block container mx-auto max-w-screen-2xl'}>
              <div className={'block lg:flex'}>
                  <div>
                      <div className={'lg:sticky top-0'}>
                          <div className={'lg:ml-8 bg-mainColor h-[395px]'}>
                              <WidgetCard/>
                          </div>
                          <div className={'lg:ml-8 bg-secondColor lg:w-[290px] lg:h-[130px] text-center'} >
                              <center className={'pt-10'}>
                                  <Link
                                      className={'bg-black text-white rounded-full font-rubik text-lg mt-10 px-2 py-2 hover:shadow-sm hover:shadow-mainColor'}
                                      href="/cv.pdf" download="cv" target='_blank'>
                                      DOWNLOAD CV
                                  </Link>
                              </center>
                          </div>
                      </div>
                  </div>
                  <div className={'lg:w-[842px]'}>
                      <HomeContent/>
                  </div>
                  <div className={'lg:flex hidden'}>
                      <NavScrollBar/>
                  </div>
              </div>
          </div>
          <svg className={'hidden lg:flex h-[519px] w-[758px] fill-inherit absolute top-0 left-0 -z-50'}>
              <polygon points={'0,455,693,352,173,0,92,0,0,71'}></polygon>
          </svg>
          <ArrowPageUp/>
          <div className={'hidden lg:flex h-[100%] absolute top-0 right-0'}>
              <svg className={'h-[536px] w-[633px] fill-mainColor fixed top-0 right-0 -z-50'}>
                  <polygon points={'0,0,633,0,633,536'}></polygon>
              </svg>
          </div>
          {/*{ isSideBarShown && <ModalSideBar setSideBarShown={setSideBarShown} children={<HomeModal/>}/> }*/}
      </>

  );
}
export default Home
