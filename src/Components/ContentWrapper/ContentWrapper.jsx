import { DisplayedPosts } from '../DisplayedPosts/DisplayedPosts';
import { Header } from '../Header/Header.jsx';


export const ContentWrapper = () => {
    return (
        <div>
            <Header />
            <DisplayedPosts />
        </div>
    );
}