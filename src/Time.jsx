import moment from "moment";

export const Time = ({ timeCreated }) => {

    const displayTime = moment(timeCreated).fromNow();

    return (
        <span>
            Updated: {displayTime}
        </span>
    )
}