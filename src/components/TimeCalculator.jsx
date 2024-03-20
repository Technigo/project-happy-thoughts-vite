const TimeCalculator = dateStr => {
  const now = new Date().getTime();
  const givenTime = new Date(dateStr).getTime();
  const timeDelta = now - givenTime;

  let timeGap = timeDelta / 1_000;
  let timeSuffix = "second";
  if (timeGap >= 60) {
    timeGap = timeDelta / 60_000;
    timeSuffix = "minute";
    if (timeGap >= 60) {
      timeGap = timeDelta / 3_600_000;
      timeSuffix = "hour";
      if (timeGap >= 24) {
        timeGap = timeDelta / 86_400_000;
        timeSuffix = "day";
      }
    }
  }

  timeGap = Math.round(timeGap);

  return `${timeGap} ${timeSuffix}${timeGap > 1 ? "s" : ""}`;
};

export default TimeCalculator;
