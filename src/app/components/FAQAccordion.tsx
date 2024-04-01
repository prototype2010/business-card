'use client'
import {LegacyRef, MutableRefObject, useRef} from "react";
import {HandleToggleType, IFaqs} from "@/app/components/HomeContent";

interface PropsFAQAccordion {
    active: null | number,
    faq: IFaqs,
    handleToggle: HandleToggleType
}

const FAQAccordion = (props: PropsFAQAccordion) => {
    const contentElement = useRef<MutableRefObject<LegacyRef<HTMLDivElement>>>();
    const { handleToggle, active, faq } = props;
    const { header, id, text } = faq;

    return (
        <>
            <div className={'space-y-1 items-center lg:pl-10 mt-2 pl-8'}>
                <div onClick={() => handleToggle(id)}>
                    <button className={`rounded-md border-none bg-mainColor text-lg font-bold text-white w-[90%] hoverAndFocus:bg-opacity-30`}>{header}</button>
                        <div
                            ref={contentElement!}
                            className={`w-[90%] min-h-[100%] bg-secondColor text-white text-center overflow-hidden transition-[max-height] ease-in duration-500 ${active === id ? 'max-h-auto' : 'max-h-0'}`}>
                            <p className={'py-4 '}>{text}</p>
                        </div>
                </div>
            </div>
        </>
    )
}

export default FAQAccordion
