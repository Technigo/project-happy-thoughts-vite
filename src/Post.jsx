// import opensoruce date library (to get the time right), instead of writing the code by myself. https://day.js.org/docs/en/plugin/relative-time
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Likes } from "./Likes";
dayjs.extend(relativeTime);

export const Post = (props) => {
  return (
    <div>
      {" "}
      {props.message} 
      <Likes hearts={props.hearts} />
      {" "}
      {dayjs().to(dayjs(props.createdAt))}
      <hr></hr>
    </div>
  );
};
