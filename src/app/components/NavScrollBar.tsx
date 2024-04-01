'use client'

import Image from 'next/image';

const NavScrollBar = () => {

    const scrollContent = (e:React.SyntheticEvent) => {
        e.preventDefault();

        const target = e.target as HTMLElement;
        const id = target.getAttribute('data-scroll') as string;
        const element = document.getElementById(id)
        element?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return(
        <nav className={'w-[46px] h-[362px] ml-4 text-white sticky top-0'}>
            <div>
                <ul className={'space-y-8 '} onClick={(e) => scrollContent(e)} >
                    <li className={'flex group/item'}>
                        <div className={'flex'}>
                            <Image src="/az.jpg" width="40" height="40" className={'rounded-full mt-8 hover:opacity-60 cursor-pointer'} data-scroll={'about'} alt={'photo'}/>
                            <div className={'relative my-auto top-[12px] right-32 ml-1 hidden rotate-180 group-hover/item:flex xxl:rotate-0 xxl:left-0'}>
                                <div className={'border-t-[8px] border-t-transparent border-r-[7px] border-r-gray-800 border-b-[8px] border-b-transparent my-auto'}></div>
                                <button className={'w-[65px] h-[30px] bg-gray-800 rounded-lg text-white rotate-180 xxl:rotate-0'}>About</button>
                            </div>
                        </div>
                    </li>
                    <li className={'group/item'} >
                        <div className={'flex'}>
                            <div >
                                <svg data-scroll={'skills'}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:opacity-60 cursor-pointer">
                                    <path data-scroll={'skills'}  strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </div>
                            <div className={'relative my-auto top-0 right-[120px] ml-1 hidden rotate-180 group-hover/item:flex xxl:rotate-0 xxl:left-0'}>
                                <div className={'border-t-[8px] border-t-transparent border-r-[7px] border-r-gray-800 border-b-[8px] border-b-transparent my-auto'}></div>
                                <button className={'w-[65px] h-[30px] bg-gray-800 rounded-lg text-white rotate-180 xxl:rotate-0'}>Skills</button>
                            </div>
                        </div>
                    </li>
                    <li className={'group/item'}>
                        <div className={'flex'}>
                            <div>
                                <svg data-scroll={'experience'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:opacity-60 cursor-pointer">
                                    <path data-scroll={'experience'} strokeLinecap={'round'} strokeLinejoin="round"
                                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"/>
                                </svg>
                            </div>
                            <div className={'relative my-auto top-0 right-[155px] rotate-180 ml-1 hidden group-hover/item:flex xxl:rotate-0 xxl:left-0'}>
                                <div className={'border-t-[8px] border-t-transparent border-r-[7px] border-r-gray-800 border-b-[8px] border-b-transparent my-auto'}></div>
                                <button className={'w-[100%] h-[30px] bg-gray-800 rounded-lg text-white px-2 rotate-180 xxl:rotate-0'}>Experience</button>
                            </div>
                        </div>
                    </li>
                    <li className={'group/item'}>
                        <div className={'flex'}>
                            <div>
                                <svg data-scroll={'references'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:opacity-60 cursor-pointer">
                                    <path data-scroll={'references'} strokeLinecap={'round'} strokeLinejoin="round"
                                          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"/>
                                </svg>
                            </div>
                            <div className={'relative my-auto top-0 right-[155px] rotate-180 ml-1 hidden group-hover/item:flex xxl:rotate-0 xxl:left-0'}>
                                <div className={'border-t-[8px] border-t-transparent border-r-[7px] border-r-gray-800 border-b-[8px] border-b-transparent my-auto'}></div>
                                <button className={'w-[100%] h-[30px] bg-gray-800 rounded-lg text-white px-2 rotate-180 xxl:rotate-0'}>References</button>
                            </div>
                        </div>
                    </li>
                    <li className={'group/item'}>
                        <div className={'flex'}>
                            <div>
                                <svg data-scroll={'blog'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:opacity-60 cursor-pointer">
                                    <path data-scroll={'blog'} strokeLinecap={'round'} strokeLinejoin="round"
                                          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
                                </svg>
                            </div>
                            <div className={'relative my-auto top-0 right-[100px] rotate-180 ml-1 hidden group-hover/item:flex xxl:rotate-0 xxl:left-0'}>
                                <div className={'border-t-[8px] border-t-transparent border-r-[7px] border-r-gray-800 border-b-[8px] border-b-transparent my-auto'}></div>
                                <button className={'w-[100%] h-[30px] bg-gray-800 rounded-lg text-white px-2 rotate-180 xxl:rotate-0'}>Blog</button>
                            </div>
                        </div>
                    </li>
                    <li className={'group/item'}>
                        <div className={'flex'}>
                            <div className={'flex'}>
                                <div>
                                    <svg data-scroll={'contacts'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:opacity-60 cursor-pointer">
                                        <path strokeLinecap={'round'} strokeLinejoin="round"
                                              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
                                    </svg>
                                </div>
                                <div className={'relative my-auto top-0 right-[133px] rotate-180 ml-1 hidden group-hover/item:flex xxl:rotate-0 xxl:left-0'}>
                                    <div className={'border-t-[8px] border-t-transparent border-r-[7px] border-r-gray-800 border-b-[8px] border-b-transparent my-auto'}></div>
                                    <button className={'w-[100%] h-[30px] bg-gray-800 rounded-lg text-white px-2 rotate-180 xxl:rotate-0'}>Contacts</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavScrollBar
