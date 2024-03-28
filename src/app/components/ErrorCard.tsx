import Link from "next/link";
import Footer from "@/app/components/Footer";


const ErrorCard = () => {

    return(
        <>
            <div className={'w-[95%] h-[450px] bg-secondColor md:ml-8 mx-auto'}>
                <div className={'mx-auto md:w-[583px] h-[170px]'}>
                    <div className={'flex flex-col justify-center items-center'}>
                        <strong className={'uppercase text-white text-[180px] font-rubik'}>404</strong>
                        <span className={'text-white text-2xl text-center font-bold font-rubik '}>THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST</span>
                        <Link href={'/'}>
                            <button className={'font-bold mt-6 w-[120px] h-[38px] text-white bg-mainColor rounded-3xl hover:opacity-60'}>Go back</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={'mt-16'}>
                <Footer/>
            </div>
        </>
    )
}

export default ErrorCard;
