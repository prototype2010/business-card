'use client'


const CircleProgressBar = (props) => {
    const { progress, svgSize, name } = props;
    const vieBoxSize = -0.125 * svgSize;
    const vieBox = 1.25 * svgSize;
    const cx = svgSize/2;
    const dasharray = 2 * 3.14 * 50
    const dashoffset = dasharray * ((100 - progress)/100)

    return(
        <div className={'mx-auto'}>
            <svg className={'-rotate-90'} width={svgSize} height={svgSize} viewBox={`${vieBoxSize} ${vieBoxSize} ${vieBox} ${vieBox}`} version="1.1" xmlns="http://www.w3.org/2000/svg">
                <circle r="50" cx={cx} cy={cx} fill="transparent" stroke='#313C42' strokeWidth={'6'} strokeDasharray={dasharray} strokeDashoffset={'0'} ashoffset="0"></circle>
                <circle r="50" cx={cx} cy={cx} className={'stroke-mainColor'} strokeWidth={'6'} strokeLinecap={'butt'} inecap="butt" strokeDashoffset={dashoffset} fill="transparent" strokeDasharray={dasharray}></circle>
                <text x="28px" y="83px" fill='white' fontSize={'22px'} fontWeight={'bold'} className={'text-white origin-center rotate-90 '}>{progress}%</text>
            </svg>
            <strong className={'text-white'}>{name}</strong>
        </div>
    )
}

export default CircleProgressBar;
