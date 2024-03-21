'use client'

import { useEffect, useState} from "react";

const ArrowPageUp = () => {
    const [ isArrowShown, setArrowShown ] = useState(false);
    const [ scroll, setScroll ] = useState(0);

    useEffect(() => {
        function onScroll() {
            const currentPosition = window.scrollY
            if (currentPosition > 100) {
                setArrowShown(true);
            } else {
                setArrowShown(false);
            }
            setScroll(currentPosition <= 0 ? 0 : currentPosition);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [scroll]);


    const scrollPageToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }


    return(
        isArrowShown && <div className={'fixed bottom-[2%] right-[2%] hover:opacity-80'} onClick={scrollPageToTop}>
            <button className={'w-12 h-12 bg-mainColor rounded-full text-white flex justify-center items-center'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>
            </button>
        </div>
    )
}

export default ArrowPageUp
