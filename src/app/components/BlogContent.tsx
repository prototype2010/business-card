
import BlogCard from "@/app/components/BlogCard";
import Footer from "@/app/components/Footer";

const BlogContent = () => {

    return(
        <>
            <h1 className={'text-2xl font-bold text-white h-[33px] uppercase ml-16'}>Blog</h1>
            <hr className={'h-px my-8 bg-white border-0 w-[85%] mx-auto'}/>
            <BlogCard
                name={'HOW TO CREATE GOOGLE FONT DEVELOPER API KEY'}
                time={'June 20, 2017'}
                category={'2'}
                comments={'0'}/>
            <BlogCard
                name={'HOW TO CREATE GOOGLE MAPS DEVELOPER API KEY'}
                time={'March 21, 2017'}
                category={'3'}
                comments={'2'}/>
            <BlogCard
                name={'HOW TO CREATE ONLINE CV AND RESUME'}
                time={'April 24, 2022'}
                text={'There are various ways for creating online CV and Resume. ' +
                    'We recommend to create an online CV using one of our ' +
                    'WordPress themes. We will show some basic tips of creating ' +
                    'online CV in example of Certy. What you need to remnember ' +
                    'is that you need to show yourself in professional and eye catching way…'}
                category={'3'}
                comments={'2'}/>
            <Footer/>
        </>
    )
}

export default BlogContent;
