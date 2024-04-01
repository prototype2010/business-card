import HomeModal from "@/app/components/modal/HomeModal";

const ModalSideBar = (props) => {
    const { setSideBarShown } = props;

    const closeModal = (e) => {
        const modalWrap = document.getElementById('modal');
        if(e.target === modalWrap) {
            e.stopPropagation()
            setSideBarShown(false);
            document.body.style.overflow = 'visible';
        }
    }

    const handleCloseSideBar = () => {
        setSideBarShown(false);
        document.body.style.overflow = 'visible';
    }

    return(
        <div className={'w-[100%] h-[100%] absolute top-0 left-0 bg-black bg-opacity-60'}
             id={'modal'} onClick={(e) => closeModal(e)}>
            <div className={'absolute top-0 -right-2.5 z-50'}>
                <div className={'flex w-[354px]'} id={'side-bar '}>
                    <button className={'w-8 h-8 rounded-full mt-2 bg-gray-700 flex justify-center items-center mr-2 hover:opacity-60'}>
                        <svg
                            onClick={handleCloseSideBar}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className={'flex-col bg-gray-800 z-50'}>
                        <HomeModal/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalSideBar;
