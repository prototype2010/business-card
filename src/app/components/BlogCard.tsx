import Image from 'next/image'
import Link from "next/link";

const BlogCard = (props) => {
    const  { name,time, category, comments, text } = props

    return(
        <div>
            <article className={'h-[auto] w-[94%] bg-secondColor mx-8 mt-4'}>
                <div>
                    <Image src="/blog.jpg" width="740" height="289" alt={'blog'} className={'mx-auto pt-10'}></Image>
                </div>
                <h2 className={'text-white  mt-10 w-[423px] h-[55px] mx-auto table'}>
                    <Link className={'text-2xl font-bold table-cell align-middle text-center hover:text-mainColor uppercase'} href={'#'}>
                        {name}
                    </Link>
                </h2>
                <time dateTime={time} className={'text-white mt-4 table mx-auto'}>{time} by admin</time>
                {text &&  <div className={'text-white mx-14 mt-8'}>{text}</div>}
                <footer>
                    <div className={'flex justify-around mt-16'}>
                        <div className={'space-x-8'}>
                            <Link href={'#'} className={'text-white hover:underline'}>Category {category}</Link>
                            <Link href={'#'} className={'text-white hover:underline'}>{comments} comments</Link>
                        </div>
                        <button className={'w-[123px] h-[32px] rounded-3xl bg-mainColor text-white hover:opacity-70'}>Read More</button>
                    </div>
                    <button></button>
                </footer>
            </article>
        </div>
    )
}

export default BlogCard;
