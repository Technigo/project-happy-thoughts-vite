<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy Thoughts

In this week's project, you'll be able to practice your React state skills by fetching and posting data to an API.

### This Weeks Project and Problems

I struggeled with what should be in the ContentWrapper and what should be in the DisplayedPosts. I changes this a few times, as it confused me. I tried to plan out what should be where when I started the project, but as I couldnt get the page to refresh with new posts I had to change things, I had to move the  useEffect and fetchThoughts to make it work, not sure why. I feel like I struggeled with keeping track on what was where in those two componants through out the project.
However, apart from this I found it a lot easier with export/import and styling in separate css. I keep forgetting to use styles. in classNames, but other than that I find it so much easier to style in separate css files. 

Posting a new meassage: 
I had to use the code from tuedays coding session to make it work, I found this part the hardest.

Time and date: 
I was hesitant to use moments for calculating and displaying the time. I was encouraged to try it during demo, and will in another code. But as my current code (though complicated to figure out) works Ill leave it as is for now.

Like buttons and clicks:
When I did the like button the first time I didnt use the id, just onclick. I found this part difficult. When I managed to make it work I added a likes -1 for unlike, but that didnt work. I started looking into it but realised it would probably allow the user to unlike other peoples posts? So i googeled it and found that there were to ways to solve this; password or localStorage and both seemd very complicated. But later, because the strechgoal wa to use localStorage I decided to try. But without password (or maybe some other way) the count refreches when I open in new browser, clear data and so on. 
I managed to to make one, but i couldnt figure out how to keep the unlike function AND update the total counts of the user. With the unlike function the counts stopped working. I saved the code and will try another time to make both work, and decided to just keep the counts. My code is now restricted so that each post can only be liked once and will be remembered and counted. I think this is done by checking if the post is already liked in my code, and if i were to remove that it would keep counting and the user could like it more than once?

I added a usefulNotes.md cuz i needed to have som explanations, links and codes easily accesable if I wanted to change something. The unlike code was saved separately as it was changed in severeal componants.

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```

### View it live

https://happy-thoughts-elbine.netlify.app/

## Instructions

<a href="instructions.md">
   See instructions of this project
  </a>
