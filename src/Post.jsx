// import opensoruce date library (to get the time right), instead of writing the code by myself. https://day.js.org/docs/en/plugin/relative-time
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Likes } from "./Likes";
dayjs.extend(relativeTime);

export const Post = (props) => {
  return (
    <div className="post">
      <div className="message">{props.message}</div>
      <div className="metadata">
        <Likes id={props.id} hearts={props.hearts} />{" "}
        <div className="time">{dayjs().to(dayjs(props.createdAt))}</div>
      </div>
    </div>
  );
};
