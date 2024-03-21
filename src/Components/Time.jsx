import { formatDistanceStrict } from "date-fns";

export const Time = ({ time }) => {
  const postedWhen = formatDistanceStrict(new Date(time), new Date(), {
    addSuffix: true,
  });

  return (
    <div>
      <p className="time">{postedWhen}</p>
    </div>
  );
};
