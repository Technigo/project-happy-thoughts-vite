import moment from "moment";

export const TimeandDate = (timeCreated) => {

    //timeCreated now holds the value of the RecentThoughts.CreateAt which was passed to this function. Use moment library to convert to a readable format

    let thisTime = timeCreated.time;

    const displayTime = moment(thisTime).format('h:mm a, Do/ MMM / YY');

    return (
        <div>
            {displayTime}
        </div>
    )
}
