<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy Thoughts
In this week's project, we practiced our React state skills by fetching and posting data to an API. Also, we learned how to use the useEffect hook to perform actions, like fetching the API when a component is mounted.

## The Problem
I built the site by solving the problems step by step - First fetching the posts, and then building a component for rendering the posts. After this building a component for sending new messages and lastly building a component for the like button. Getting everything to work before moving on to the next problem made me understand the architechture of the site and it was later easier to see how everything was connected. At first I was studying other people's code to be able to see how to solve the problem, but when building the like-component I solved this pretty much on my own (with maybe some help from chatGPT). By now I was very glad to have learned the useState hook and it seemed to be the most straightforward way to update the likes on the posts. I've also used Postman during the project and this I found very helpful as it gave me a good overview of the data the APIs were sending and receiving.

If I had more time I would probably have made an own component for the send message-button, as I had done this for the like-button. Also, I would have added an animation to the last post sent, but I couldn't figure out how to get hold of the id of the message that was stored in the create-component, a sibling to the post-component. Since they are siblings, it's not as easy to send the data as props. With better planning in the beginning, I would maybe have had time to solve this.

### View it live
Here's the deployed site: 
https://happy-thoughts-emmy-dieden.netlify.app/


