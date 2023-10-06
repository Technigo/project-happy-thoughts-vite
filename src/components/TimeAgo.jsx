/* eslint-disable react/prop-types */
import moment from 'moment';

export const TimeAgo = ({timestamp}) => {
    const time = moment(timestamp);
    const timeAgo = time.fromNow();
    return <span>{timeAgo}</span>;
};