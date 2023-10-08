import moment from "moment";

export const Time = ({ timeCreated }) => {

    const createdAt = moment(timeCreated).format(`h:mm a Do/ MMM / YY`)

    return (
        <div>
            Updated: {createdAt}
        </div>
    )
}