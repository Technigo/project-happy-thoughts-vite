const TimeCalculator = dateStr => {
  const now = new Date().getTime();
  const givenTime = new Date(dateStr).getTime();
  const timeDelta = now - givenTime;

  let timeGap = timeDelta / 1_000;
  let timeSuffix = "seconds";
  if (timeGap >= 60) {
    timeGap = timeDelta / 60_000;
    timeSuffix = "minutes";
  }
  if (timeGap >= 60) {
    timeGap = timeDelta / 3_600_000;
    timeSuffix = "hours";
  }
  if (timeGap >= 24) {
    timeGap = timeDelta / 86_400_000;
    timeSuffix = "days";
  }
  return Math.round(timeGap) + " " + timeSuffix;
};

export default TimeCalculator;
