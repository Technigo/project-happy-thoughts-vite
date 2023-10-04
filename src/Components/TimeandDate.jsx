
export const TimeandDate = (timeCreated) => {

    //timeCreated now holds the value of the RecentThoughts.CreateAt which was passed to this function so we need to do timeCreate.time

    console.log(`this is in props:`, timeCreated)

    let thisTime = timeCreated.time;

    //output format: 2023-10-04T13:05:34.873Z

    console.log(`this is in thisTime`, thisTime);

    const displayTime = new Date(thisTime).toLocaleDateString(); // only displays the date, no time

    return (
        <div>
            {displayTime}
        </div>
    )
}
