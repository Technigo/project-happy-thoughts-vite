<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy thoughts Project

The purpose of this project was to create a web app where users can post happy thoughts, like others' posts, and see how long ago each thought was shared. The app shows the latest 20 messages, with each interaction updating the API data to ensure all users see the most recent posts and likes in real-time.

## Getting Started with the Project

I created three main components, one that manages data fetching, posting, and updating thoughts in the UI. One for the posting form that allows users to submit a new happy thought, and one that renders the list of messages, likes, and timestamps.

### The Problem

Data Management: Fetching and updating messages on load and upon posting required using useEffect and useState hooks. I also implemented a POST call to ensure the API updates with each new message.

Accessibility: Styling was adjusted for readability and contrast, which led to a few deviations from the original design layout.

Responsive Styling: Ensuring responsive layout and consistent component spacing presented styling challenges.


If I had more time, I would:
- Refine styling for enhanced visual appeal.
- Add a character counter for message input, allowing a maximum of 140 characters.

### View it live

Deployed link: https://fh-happythoughtsapp.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
