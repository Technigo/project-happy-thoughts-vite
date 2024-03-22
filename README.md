<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Unhappy thoughts Project

In this week's project, you'll be able to practice your React state skills by fetching and posting data to an API.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### The Problem

Using react and useEffect we should create an app fetching messages from an API. The user should be able to like the messages, aswell as post new ones.

- I started with fetching the posts and displaying the data needed. I decided I wanted to use a resonable amount of components.
- I then created the like feature, which I had some issues with at first. (I doubled the likes, instead of adding one).
- I then moved on to styling, to rest my brain and get a better sense of what I was building.
- A couple of days later I came back to build the new thoughts feature. I decided to do a fetch every time the user posted a new thought since I wanted to get the updated thoughts from my classmates. For the same reason I added a fetch interval.
- Finished off by adding the feature of making liked hearts pink instead of grey.
- _I am now done with the basic requirements._

- Added a counter to the form
- Added error message when post is denied (although, the API doesn't return WHY)

#### Next steps

- I should style the header
- Do some stretch

### View it live

[![Netlify Status](https://api.netlify.com/api/v1/badges/b349c345-6bfd-420b-982a-4add75508480/deploy-status)](https://app.netlify.com/sites/sofias-project-happy-thoughts/deploys)

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
