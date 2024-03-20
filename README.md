<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

### The Project

Happy thought app
React app that uses useEffect hook to manage different states of the components,useState hook to set different state, Localstorage to keep track of date in-between sessions, moment.js to display human readable date format.POST request to Api to manage new post insertions.

### The Problem

I chose useState to manage state within functional components and useEffect for side effects like updating the happy thought state/sorting them/display loading while fetching. I opted for moment.js for handling date and time formatting to display a human readable format.

I created different React functional components.
I did a POST request to udate the thought API whenever a new thought has been posted.
I used useEffect to update the happy thought periodically, on mounting/updating.
I integrated moment.js to generate a human readable format of the date and time.
I employed localStorage to persist the happy thought likes number across sessions.
I added a FadeIn animation to avery new Happy Thought posted.
I update the list of thoughts using the spread sintax.
I used a conditional expression within a JSX element's className attribute to display validation while typing into the textarea.

---

I tested the React app to ensure the happy thoughts are updating correctly.
I verified that the happy thought persists across sessions using localStorage.

---

If I had more time:
I would enhance the user interface by adding animations or transitions to make the app more visually appealing.
I would implement a feature to allow users to share their happy thoughts on social media platforms.
I would try to refactor my code to make it more functional, where possible.

### View it live

https://happy-vibes-app-vicky.netlify.app

## Collaborators

[vittoriamatteoli]
