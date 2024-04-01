'use client'

interface PropsProgressLine {
    percentage: number,
    name: string
}

const ProgressLine = (props: PropsProgressLine) => {
    const { percentage, name } = props;

    return(
        <div>
            <div className={'flex mt-2 font-bold justify-between text-white font-aldrich'}>
                <span>{name}</span>
                <div>{percentage}%</div>
            </div>
            <div className={'w-full bg-white h-1'}>
                <div className={`bg-mainColor h-1`} style={{width: `${percentage}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressLine
