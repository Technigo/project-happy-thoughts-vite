
export const TimeandDate = (timeCreated) => {

    //timeCreated now holds the value of the RecentThoughts.CreateAt which was passed to this function so we need to do timeCreate.time

    let thisTime = timeCreated.time;

    //output format: 2023-10-04T13:05:34.873Z

    const displayTime = new Date(thisTime).toLocaleDateString(); // only displays the date, no time

    return (
        <div>
            {displayTime}
        </div>
    )
}
