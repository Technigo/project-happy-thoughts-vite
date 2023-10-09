export const Header = () => {
    return (
        <header>
            <h1 className='text'>Project Happy thoughts!</h1>
            <h2>Evelyn</h2>
        </header>
    );
};

// Explanation:
// The Distributive component serves as a container that manages the state and functions related to message fetching and posting in a message board application. Initially, it sets a loading state to manage the loading status and a messageList state to store the fetched messages. The fetchPosts function retrieves messages from an API and updates the messageList, while handling the loading status. Upon component mount, useEffect triggers fetchPosts to populate the initial messages. The addNewPost function allows adding a new message to the messageList state. The component renders PostMessage and MessageList components, passing down relevant states and functions as props to manage and display messages interactively.