<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy Thoughts

In this week's project, you'll be able to practice your React state skills by fetching and posting data to an API.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? If you had more time, what would be next?

### View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>

    Fetch and Display Recent Thoughts:
        Fetch the recent thoughts from the provided API endpoint using fetch.
        Display these thoughts, showing the content of the message and the number of likes they've received.

    Post New Thoughts:
        Create a form that allows the user to post a new thought.
        Send a POST request to the API to post the new thought.
        Update the list of thoughts to include the newly posted thought.

    Like a Thought:
        Implement a button to send likes on a thought.
        Send a POST request to the API to like the thought.
        Update the number of likes for the thought.

Stretch Goals:

    Intermediate Stretch Goals:
        Show a character count below the form input that updates as the user types.
        Change the character count to red when the user exceeds 140 characters.
        Handle API response errors for invalid message lengths and show friendly error messages to the user.

    Advanced Stretch Goals:
        Keep count of how many different posts the user has liked.
        Implement an animation when a new thought is submitted and appears in the list.
        Handle loading states by showing a loading message or spinner during API requests.
