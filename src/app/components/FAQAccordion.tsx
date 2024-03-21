'use client'
import { LegacyRef, useRef } from "react";


const FAQAccordion = (props) => {
    const contentElement = useRef<LegacyRef<HTMLDivElement>>();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <>
            <div className={'space-y-1 items-center pl-10 mt-2'}>
                <div onClick={() => handleToggle(id)}>
                    <button className={`rounded-md border-none bg-mainColor text-lg font-bold text-white w-[90%] hoverAndFocus:bg-opacity-30`}>{header}</button>
                        <div
                            ref={contentElement!}
                            className={`w-[90%] bg-secondColor text-white text-center overflow-hidden transition-[max-height] ease-in duration-500 ${active === id ? 'max-h-60' : 'max-h-0'}`}>
                            <p className={'py-4'}>{text}</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default FAQAccordion
