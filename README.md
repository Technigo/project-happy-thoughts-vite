<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy thoughts Project

The goal of this project was to build a positive social feed for sharing "happy thoughts" by utilizing React’s state management capabilities to fetch, display, and post data to an API. I started by analyzing the structure and requirements, breaking it down into three key areas: fetching recent thoughts, posting new ones, and implementing a "like" feature. Planning involved deciding on the component structure and defining the necessary state for each component to ensure smooth interactions and an intuitive user experience.

For the build, I used React to manage component state and effects, enabling efficient data fetching and updating. useEffect was used to load initial data from the API upon component mounting, and useState to handle form submissions and like counts. For an improved user experience, I implemented an optimistic UI update, where new thoughts appear instantly in the feed before the API has confirmed the post. This approach provided fast feedback for users, especially for mobile responsiveness and handling slow network connections.

If I had more time, I would focus on refining accessibility by improving screen reader support, adding animations for new thoughts, and implementing a loading spinner to indicate the fetching process. Adding validation feedback and character counting would further enhance the app's interactivity and user experience.

### View it live

https://happy-thoughts-project-technigo.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
