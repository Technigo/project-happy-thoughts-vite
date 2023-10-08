<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy Thoughts Web App

This web application project aimed to cultivate a positive ambiance, allowing users to freely share and embrace happy thoughts. Through the integration of real-time thought updates, an intuitive UI, and seamless like functionality, I enhanced my expertise in React and API integration.

## Project Structure

- **`App.js`**: The main entry point of the application, rendering the header and the thought handling container.
  
- **`ThoughtHandlingContainer.js`**: Handles fetching, displaying, and posting thoughts, adapting to different viewports.

- **`ThoughtList.js`**: Displays a list of thoughts, showcasing their content and likes received.

- **`SingleThought.js`**: Displays a single thought with options to like the thought and view its creation time.

- **`CreateThought.js`**: Allows users to create new happy thoughts and submit them, adhering to message length requirements.

## Project Evolution

I approached this project in two stages. Initially, my focus was on understanding the existing code provided as starter code. My primary goal was to grasp the logic behind the application. After successfully achieving a functional state, I decided to reimplement the app from scratch, this time without the starting code.

### Version 1: Understanding the Logic

In the first version, I analyzed and comprehended the pre-existing code. I ensured the project reached a functional state based on this code.

### Version 2: Design-Driven Development

For the second version, I adopted a design-driven approach. I sketched each necessary component based on the provided design. I planned where specific features should reside. Then, I rebuilt each component accordingly, incorporating enhancements such as disabling the submit button for lengthy messages and removing short message error prompts upon user interaction.

I also implemented automatic data updates every 10 seconds, obviating the need for manual page reloads to view new messages. Subsequently, I focused on optimizing the webpage's responsiveness across various devices.

### Styling and Future Considerations

The styling was created in alignment with the provided design and sketches using CSS from the provided example. While animations would have been a valuable addition given more time, my primary focus was on deepening my understanding of `useEffect` and `useState` hooks, as well as mastering API integration.

## Challenges and Solutions

In the first version, the challenge was comprehending someone else's code and understanding the intricate logic behind how all the components interacted with each other. Additionally, working with post requests for the first time posed a challenge.

In the second version, the challenge shifted to recreating the app with my own logic. I encountered unexpected behaviors, such as my post only appearing at the top of the message list after page reload. This occurred because I called the function in the wrong place. Throughout the process, I conducted various experiments to understand how different parts of the code worked, enabling me to deepen my understanding of its functionality.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **JavaScript**: Programming language used for the application's logic.
- **CSS**: Styling the components and layout.
- **fetch API**: Used for making HTTP requests to the server.

## View it live
To view the project, visit the following link:
[View it live here](https://project-happy-thoughts-veronica.netlify.app/)

