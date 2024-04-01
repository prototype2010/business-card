
interface PropsStyledList {
    name: string
}

const StyledList = (props: PropsStyledList) => {
    const {name} =props;

    return(
        <li className={'flex text-white font-bold mt-2'}>
            <svg className={"w-6 h-6 mr-6"}
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="5" d="M5 11.917 9.724 16.5 19 7.5"/>
            </svg>
            <span>{name}</span>
        </li>
    )
}

export default StyledList;
