
export const getTimeDifferenceString = (dateString) => {
    const currentTime = new Date();
    const thoughtTime = new Date(dateString);

    const diffrenceInMilliseconds = currentTime - thoughtTime;

    const minutes = Math.floor(diffrenceInMilliseconds / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 60) {
        return `${minutes} minutes ago`;
    } else if (hours < 24) {
        return `${hours} hours ago`;
    } else {
        return `${days} days ago`;
    }
}