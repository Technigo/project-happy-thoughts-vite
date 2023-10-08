<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy Thoughts

Practice React state skills by fetching and posting data to an API.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i
code . 
npm run dev
```

### The Problem

Describe how you approached to problem, and what tools and techniques you used to solve it. How did you plan? What technologies did you use? 

- **Used to carry out the project:**
  - Course material (including previous API course)
  - Stack overflow (SO)
  - web.postman.co
  - Chat GPT
  - Google
  - Team's help

- Understanding the provided code took a long while as components were already created and the logic behind the code needed to be grasped before moving on.

- Not fully understanding what the API does was confusing as the number of likes incremented on its own, without any other code writing but the POST request itself followed by the GET request to update the whole messageList component - understood that using Postman.

- Had previously an issue regarding the date format's consistency on different browsers and OS, read on moment.js (after tips from Technigo on SO) but chose help from a teammate on date-fns library instead as the former is not recommended anymore on SO several threads, was able to use it after several SO threads, else:
  - <https://date-fns.org/>
  - <https://medium.com/@stheodorejohn/magic-of-date-fns-in-react-boost-your-date-handling-abilities-e55c92634efa>


If you had more time, what would be next?
I would probably go for my own components and logic if I had more time and confidence in usage of API's post and get request in React while simultaneously using useState, and different combinations of promises in useEffect hooks.

### View it live

Link to the deployed project so that the viewer can click around and see what it's all about:
https://lambent-fudge-cba686.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
