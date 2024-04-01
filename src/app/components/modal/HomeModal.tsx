import WidgetCard from "@/app/components/WidgetCard";


const HomeModal = () => {

    return(
        <div className={'md:h-screen h-full pb-4 md:pb-0'}>
            <div className={'max-w-[312px]'}>
                <div className={'mx-auto mt-2.5 bg-mainColor h-[395px] w-[290px]'}>
                    <WidgetCard/>
                </div>
            </div>
            <h3 className={'mt-4 text-center text-gray-400 font-bold '}>Search</h3>
            <div className={'flex justify-center mt-4'}>
                <input className={'px-2 h-10 bg-black outline-none caret-white'} type="text" placeholder={'search'}/>
                <div className={'bg-black text-white cursor-pointer flex items-center px-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                    </svg>
                </div>
            </div>
            <div>
                <h3 className={'mt-4 text-center text-gray-400 font-bold font-serif'}>Tags</h3>
                <div className={'text-white mx-6 w-[260px] h-auto space-y-3'}>
                    <button className={'hover:opacity-60 h-auto w-auto border border-black px-3.5 ml-2'}>API</button>
                    <button className={'hover:opacity-60 h-auto w-auto border border-black px-3.5 ml-2'}>Certy</button>
                    <button className={'hover:opacity-60 h-auto w-auto border border-black px-3.5 ml-2'}>CV</button>
                    <button className={'hover:opacity-60 h-auto w-auto border border-black px-3.5 ml-2'}>Expirience</button>
                    <button className={'hover:opacity-60 h-auto w-auto border border-black px-3.5 ml-2'}>Google</button>
                    <button className={'hover:opacity-60 h-auto w-auto border border-black px-3.5 ml-2'}>Key</button>
                    <button className={'hover:opacity-60 h-auto w-auto border border-black px-3.5 ml-2'}>Online</button>
                    <button className={'hover:opacity-60 h-auto w-auto border border-black px-3.5 ml-2'}>Resume</button>
                </div>
            </div>
            <div>
                <h3 className={'mt-4 text-center text-gray-400 font-bold font-serif'}>FROM THE BLOG</h3>
                <hr className={'border-1 border-black w-5/6 mx-auto mt-4'}/>
            </div>
            <ul className={'text-white '}>
                <li className={'w-[225px] h-[40px] pl-6 mt-4'}>
                    <a href="#" className={'hover:opacity-60'}>How to Create Google Font Developer API Key</a>
                </li>
                <hr className={'border-1 border-black w-5/6 mx-auto mt-4'}/>
                <li className={'w-[225px] h-[40px] pl-6 mt-4'}>
                    <a href="#" className={'hover:opacity-60'}>How to Create Google Maps Developer API Key</a>
                </li>
                <hr className={'border-1 border-black w-5/6 mx-auto mt-4'}/>
                <li className={'w-[225px] h-[40px] pl-6 mt-4'}>
                    <a href="#" className={'hover:opacity-60'}>How to Create Online CV and Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default HomeModal;
