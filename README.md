<h1 align="center">
  <a href="">
    <img src="/src/assets/preview.png" alt="Project Banner Image">
  </a>
</h1>

# Happy Thought Posting App

he happy thought posting app allows users to share positive thoughts and messages with others. Users can view, like, and post their own happy thoughts.

#### Features:

- Posting Thoughts: Users can enter their happy thoughts into a text input field and submit them to the app.

- Viewing Thoughts: The app displays a list of happy thoughts posted by users, with the most recent thoughts appearing at the top.The users can see how long ago were they posted. The app updates the posts very few seconds by defualt.

- Liking Thoughts: Users can like thoughts posted by other users to show appreciation for the message.

- Heart Counter: The app keeps track of the number of likes each thought receives and displays the total count.

- Local Storage: The app stores liked thoughts and their like counts in the browser's local storage to persist data between sessions.

- Animation: When a new thought is posted, it pops into view with a brief animation to catch the user's attention. And a shake animation for the input section to show the user the error message.

### The Problem and Self-exploration

- I attempted to create separate functions for both 'like' and 'unlike' actions, but it appears that the API only allows for incrementing the hearts count.

- Additionally, I decided to explore some new styling tools for this project, so I chose to use SASS. However, during the installation process, I encountered an issue that resulted in a failure to build the localhost. With guidance from my mentor, I discovered that I accidently canceled the Vite live server command by entering commands into the Vite window. This experience not only improved my understanding of the terminal window but also expanded my knowledge of SASS.

### View it live

[![Netlify Status](https://api.netlify.com/api/v1/badges/cd33c6b1-e64f-43f1-b2de-65945dcf4166/deploy-status)](https://app.netlify.com/sites/yifan-happy-thought-post/deploys)
