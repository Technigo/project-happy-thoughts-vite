import moment from "moment";

export const TimeandDate = ({ timeCreated }) => {

    //REMEMBER you need {} for your props so that they send the value of the variable and not an object with the value as a property

    const displayTime = moment(timeCreated).format('h:mm a, Do/ MMM / YY');

    return (
        <div>
            Updated: {displayTime}
        </div>
    )
}
