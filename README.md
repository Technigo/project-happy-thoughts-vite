# Happy thoughts Project

In this project, the goal was to create an interactive user interface where users could submit "happy thoughts" (messages) and like each other's thoughts. The challenge was to fetch existing thoughts from an API, post new thoughts, and implement a liking feature, all while keeping the UI responsive and user-friendly. This project was also designed to help practice working with React's state management and communicating with an API using `bash fetch`.

## Getting Started with the Project

### Dependency Installation & Startup Development Server

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

## Tools and Techniques Used

- React: I used React for building the user interface and managing state across different components.
- Fetch API: I used the Fetch API to communicate with the Happy Thoughts API, both for fetching and posting data.
- Component Structure: I broke down the app into reusable components (ThoughtForm, ThoughtList, and SingleThought) to maintain code modularity and improve readability.
- React Hooks: I used useState to manage local state and useEffect to fetch data from the API when the component first rendered.
- Optimistic UI Updates: I applied optimistic UI updates to make the app feel more responsive by immediately updating the UI without waiting for the server.
- Error Handling: I added basic error handling to ensure the app could deal with network issues gracefully.
- API File Separation: To keep the code clean, I moved all the API interaction logic into a separate api.js file. This allowed me to centralize API functions and keep the components focused on the UI logic.

### Technologies Used

- React: For building the user interface
- JavaScript (ES6+): For handling asynchronous API calls and logic
- CSS: For basic styling of the app
- Fetch API: For making HTTP requests to the backend API
- Node.js and npm: For managing dependencies and running the development server

### View it live

https://happythoughts-api.netlify.app/
