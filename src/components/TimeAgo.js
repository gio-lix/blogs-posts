import {parseISO, formatDistanceToNow} from "date-fns"


const TimeAgo = (timeStep) => {
    let timeAgo = ""
    if (timeStep) {
        const date = parseISO(timeStep)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
    return (
        <div>&nbsp; {timeStep} </div>
    )
}
export default TimeAgo