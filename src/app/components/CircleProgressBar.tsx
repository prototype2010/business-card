'use client'

interface CircleProgressBar {
    progress: string,
    svgSize: string,
    name: string
}

const CircleProgressBar = (props: CircleProgressBar) => {
    const { progress, svgSize, name } = props;
    const vieBoxSize = (-0.125 * +svgSize.toString());
    const vieBox = (1.25 * +svgSize).toString();
    const cx = (+svgSize/2).toString();
    const dasharray = (2 * 3.14 * 50).toString();
    const dashoffset = (dasharray * ((100 - +progress)/100)).toString();

    return(
        <div className={'mx-auto font-aldrich'}>
            <svg className={'-rotate-90'} width={svgSize} height={svgSize} viewBox={`${vieBoxSize} ${vieBoxSize} ${vieBox} ${vieBox}`} version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle r="50" cx={cx} cy={cx} fill="transparent" stroke='#313C42' strokeWidth={'6'} strokeDasharray={dasharray} strokeDashoffset={'0'} ></circle>
                <circle r="50" cx={cx} cy={cx} className={'stroke-mainColor'} strokeWidth={'6'} strokeLinecap={'butt'} inecap="butt" strokeDashoffset={dashoffset} fill="transparent" strokeDasharray={dasharray}></circle>
                <text x="28px" y="83px" fill='white' fontSize={'22px'} fontWeight={'bold'} className={'text-white origin-center rotate-90 '}>{progress}%</text>
            </svg>
            <strong className={'text-white text-sm'}>{name}</strong>
        </div>
    )
}

export default CircleProgressBar;
