/* eslint-disable react/prop-types */


const formatDate = (date) => {
    const currentDate = new Date();
    const currentTimestamp = currentDate.getTime();
    const currentSeconds = Math.floor(currentTimestamp / 1000);

    const oldDate = new Date(date)
    const oldTimestamp = oldDate.getTime();
    const oldSeconds = Math.floor(oldTimestamp / 1000);


    const difference = currentSeconds - oldSeconds;
    let output = ``;
    if (difference < 60) {
        // Less than a minute has passed:
        output = `${difference} seconds ago`;
    } else if (difference < 3600) {
        // Less than an hour has passed:
        output = `${Math.floor(difference / 60)} minutes ago`;
    } else if (difference < 86400) {
        // Less than a day has passed:
        output = `${Math.floor(difference / 3600)} hours ago`;
    } else if (difference < 2620800) {
        // Less than a month has passed:
        output = `${Math.floor(difference / 86400)} days ago`;
    } else if (difference < 31449600) {
        // Less than a year has passed:
        output = `${Math.floor(difference / 2620800)} months ago`;
    } else {
        // More than a year has passed:
        output = `${Math.floor(difference / 31449600)} years ago`;
    }
    return output
}

export const BoxList = ({info , like}) => {





  return (
    <div className="list-wrapper">
        <h3>{info.message}</h3>
        <div className="info-wrapper">
            <div className="like">
                <button className="like-btn" onClick={() => like(info._id)}><span className="emoji">❤️</span></button>
                <span className="like-number">x {info.hearts}</span>
            </div>
            <div className="time">{formatDate(info.createdAt)}</div>
        </div>

    </div>
  )
}
