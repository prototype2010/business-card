import Link from "next/link";
import Image, {StaticImageData} from 'next/image';
import React from "react";

interface PortfolioProps {
    img: StaticImageData,
    href: string,
    isShown: boolean
}

const Portfolio = (props: PortfolioProps) => {
    const { img, href, isShown } = props;

    return(
        <article >
                <div className={'group relative cursor-pointer border border-black'}>
                    <figure className={'opacity-100 group-hover:opacity-20 duration-500'}>
                        <Image className={'h-[200px] w-[370px]'} src={img} alt="portfolio-picture"/>
                    </figure>
                    <div className={'opacity-0 ml-6 pt-6 flex flex-col justify-center items-center absolute top-0 left-0 mt-8  group-hover:opacity-100 duration-500'}>
                        <h2 className={'text-white text-2xl font-bold uppercase font-aldrich '}>Certy work</h2>
                        <p className={'text-gray-400 text-center mb-2'}>Just some text fdgsdgsg gsgsgdgsdg </p>
                        { isShown &&
                            <Link target="_blank" href={href}>
                                <span className={'text-white p-2 h-24 bg-mainColor rounded-full hover:opacity-60'}>View more</span>
                            </Link>}
                    </div>
                </div>
        </article>
    )
}

export default Portfolio;
