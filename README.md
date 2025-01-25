<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy thoughts Project

This project allows users to post happy thoughts, view the most recent posts, and like posts by clicking a button. It uses the useEffect hook to handle side effects such as fetching recent posts from an API and updating the time since each thought was posted in real time. 

### The Problem

I tried to keep it simple and keep the focus on managing state and lifecycle events, rather than getting distracted with design issues like which font to use. In some ways having a design to copy helps to streamline the design process, but having to work within certain limitations can also feel like a challenge. (I actually started to look into tools that could help me identify fonts, but then backtracked and decided I needed to have a working app first. 😅)

I did request some help from ChatGPT for making the function to display the time lapsed since a happy thought was posted, but after looking at the code I felt like I could have come up with the function on my own.

One challenge I didn't expect was how to get the accessibility score in Lighthouse to be 95 or higher when the design showed a light gray text on a white background. I tried making the font bigger and bolder, but would still be just under the accesibility score requirement. In the end, I decided accessibility was a higher priority than copying the design perfectly, so I had to settle for a darker gray font color.

If I had more time, I would love to try to tackle the stretch goals, like triggering an animation when submitting a new thought.

### View it live

https://happy-thoughts-joyce.netlify.app/
