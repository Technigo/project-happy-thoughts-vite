# Miko's Happy Thoughts Project ❤️
The Happy Thoughts project is a React application designed to practice the React state management skills by fetching and posting data to an API. This is a simple API to collect 'happy thoughts' and our own version of Twitter.


## Feature⛳️
- Managing React state to handle data fetching and posting.
- Creating a responsive web application that adapts to different screen sizes.
- Implementing interactive features like liking thoughts and real-time character counting.
- Adding animations for a more engaging user experience.

## Credit 🍁
- The Confetti animation is implemented using the react-confetti library.
- The useWindowSize hook from react-use is used to enhance the animation.

### Dependency Installation & Startup Development Server
Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.
The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
npm i react-confetti 
npm i react-use
npm i date-fns
```

## The Problem 💪
Issue 1: Post Update
Problem: When implementing the part for updating new post thoughts, I faced an issue where the new posts were not updating as expected. Despite thorough debugging and console logging, I couldn't identify the root cause of this problem initially.

Resolution: After seeking assistance, it became apparent that the issue was related to clearing the new post by the end of the operation. This revelation helped resolve the issue and ensure proper updating of new thoughts.

Issue 2: Stretch Goal Challenges
Problem: Implementing the stretch goals presented a significant challenge. While working on them, I encountered various new concepts and technologies, such as using the Confetti library for animations, utilizing useWindowSize to dynamically set width and height, and managing error messages.

Resolution: Despite the challenges, working on the stretch goals was a valuable learning experience. It allowed me to gain a deeper understanding of these technologies and expand my skill set in React development.
Here are some materials that I've been used during this project:
- https://www.npmjs.com/package/react-confetti
- https://nextjs-notion-blog-starter.vercel.app/blog/how-to-make-confetti-with-react-in-5-minutes
- https://medium.com/@stheodorejohn/magic-of-date-fns-in-react-boost-your-date-handling-abilities-e55c92634efa

## View it live
[View the Front-End](https://mikos-happy-thoughts.netlify.app/)
[View the Back-End](https://happy-thoughts-api-aes9.onrender.com/)
[View the Back-End Repo](https://github.com/MikoZhu/project-happy-thoughts-api)


