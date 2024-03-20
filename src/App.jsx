import {PostForm} from "./component/postForm/PostForm";
import { GetThought } from "./component/GetMessage/GetThought";
export const App = () => {


  return (
    <>
    <div>Happy Thoughts 💌</div>
      <div className="sent-thought-wrapper">
        <PostForm />
      </div>
      <div className="get-thought-wrapper">
        <GetThought />
      </div>
    </>
  )
};
