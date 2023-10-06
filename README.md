<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy Thoughts

The assignment was to create a Twitter-like application, where we, with the use of useEffect, useState and Fetch API would make it possible for the user to interact with the application, by adding posts and liking posts. 

## Getting Started with the Project

I started out by sketching out what components I would need. For this I created a simple mindmap in Figjam, next to a printscreen of the design. This made it clear for me what I needed to do and in what order. I then created all files and folders, and started with the design. I found it easier to first fix the design, and then figure out how to move on. It was then pretty clear, I needed to implement functionality to make post actually POST, and from there I kind of just kept going. 
### The Problem

I dindn't have any big difficulties more than trying to understand what was going on, until like the day before the demos. Then I realized I couldn't get the post to show right away, instead I had to refresh the page. Figuring out how to solve this required a team meeting on Zoom, a team disussion on Slack, a question on StackOverflow and some rubber-ducking with a teacher. Finally it was me trying to make console.logs on a few different places to find where the issues began that solved the issue. When I realized that it was the array of thoughts that hadn't updated when I needed it to, chatGpt led me in the right direction by suggesting to make my POST-fetch async. In fact, the fetch was async, but I was missing an await right infront of where the data was being saved. 

### View it live

https://happy-thoughts-lauralyckholm.netlify.app/
