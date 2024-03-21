

const BlogModal = () => {

    return(
        <div className={'max-w-[412px] text-gray-600 font-bold uppercase'}>
            <h2 className={'mt-4 text-center'}>Recent Comments</h2>
            <hr className={'mt-8 border-black w-[80%]'}/>
            <aside className={'mt-8 w-308px'}>
                <h2 className={'text-center'}>Search</h2>
                <form action="#" >
                    <div className={'flex mt-8 mx-5'}>
                        <input type='search' placeholder={'Search'} className={'bg-black pl-2 h-12 outline-none caret-white'}/>
                        <div className={'text-white cursor-pointer flex items-center px-2 bg-black'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
                                 stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                            </svg>
                        </div>
                    </div>
                </form>
            </aside>
        </div>
    )
}

export default BlogModal;
