import { RecentThoughts } from './Components/RecentThoughts';
import { NewThought } from './Components/NewThought';
import { Header } from './Components/Header';
import { PostMessage } from './Components/PostMessage';

export const App = () => {

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="input-new-thought-box">
        <NewThought />
        <PostMessage />
      </div>
      <div className="thoughts-box">
        <RecentThoughts />
      </div>
    </>
  )
};
