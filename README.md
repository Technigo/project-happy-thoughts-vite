<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# About the project

I built a Twitter-like app where the users can post their, preferably happy, thoughts/messages, using React as well as fetching and posting data to an API.

### The Problem
Structure:
  The App component is the parent component where the fetching of recent messages and adding new messages to the list are handled.
  It has two main childen components (besides Header): 
  - Message List - where all the recent messages are displayed in the order from most recent ones at the top and older ones at the bottom.
    + The Message List has one child component: Single Message - which handles the POST request to like an existing message and displays the individual messages in the list.
  - Message Form - which has a form to post a new message and handles the POST request to the provided API. The message the user sends is validated - it must be present and be between 5 and 140 characters long. If it fails these validations, the user will get a response with error information, which is made with the state update. A count is shown below the form input that updates as the user types and shows how many characters are remaining. The count goes red when the user has typed over 140 characters

Potential improvements:
- Keeping count of how many different posts the user has liked (different from how many times a post has been liked). Keep count and display it in some way. Could even go as far as to store this number in localStorage so that when the page is reloaded, the initial state can be set from the number stored.
- Adding an animation for when a new message is submitted and appears in the list below

### View it live

hang-nguyen-happy-thoughts-project.netlify.app 
