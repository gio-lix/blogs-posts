import {parseISO, formatDistanceToNow} from "date-fns"


const TimeAgo = ({timeStep}) => {
    let timeAgo = ""
    if (timeStep) {
        const date = parseISO(timeStep)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
    console.log("timeAgo - ", timeAgo)
    return (
        <div className='text-xs text-gray-300'> {timeAgo} </div>
    )
}
export default TimeAgo