//---------- calculates  the time since the thought was posted ----------//

export const getTimeSince = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);

  const years = Math.floor(seconds / 31536000);
  if (years >= 1) {
    return years + " years";
  }
  const months = Math.floor(seconds / 2592000);
  if (months >= 1) {
    return months + " months";
  }
  const days = Math.floor(seconds / 86400);
  if (days >= 1) {
    return days + " days";
  }
  const hours = Math.floor(seconds / 3600);
  if (hours >= 1) {
    return hours + " hours";
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes >= 1) {
    return minutes + " minutes";
  }
  return "just now";
};
