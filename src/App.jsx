import ThoughtsList from './components/ThoughtsList';
import { PostThought } from "./components/PostThought";
import './App.css';

export const App = () => {
  return <div className='main-wrapper'>
    
    <h1>Project Happy Thoughts</h1>
    <h2>Testing</h2>


<PostThought />
<ThoughtsList />


  </div>;
};
