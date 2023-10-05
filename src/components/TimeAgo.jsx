import React from 'react';
import moment from 'moment';

const TimeAgo = ({timestamp}) => {
    const time = moment(timestamp);
    const timeAgo = time.fromNow();
    return <span>{timeAgo}</span>;
};

export default TimeAgo;