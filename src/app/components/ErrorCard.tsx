import Link from "next/link";


const ErrorCard = () => {

    return(
        <div className={'w-[808px] h-[450px] bg-secondColor ml-8'}>
            <div className={'mx-28 w-[583px] h-[170px]'}>
                <div className={'flex flex-col justify-center items-center'}>
                    <strong className={'uppercase text-white text-[180px]'}>404</strong>
                    <span className={'text-white text-2xl text-center font-bold'}>THE PAGE YOU WERE LOOKING FOR DOESN'T EXIST</span>
                    <Link href={'/'}>
                        <button className={'font-bold mt-6 w-[120px] h-[38px] text-white bg-mainColor rounded-3xl hover:opacity-60'}>Go back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorCard;
