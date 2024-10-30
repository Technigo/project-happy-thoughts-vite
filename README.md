<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy thoughts Project

The goal is to create a Twitter (X)-like app that uses React state to fetch and post data to an API. The app includes an input field for submitting new posts and a wall displaying posted comments. Each post has a like button that changes color when clicked, and the submit button shows a 'loading' state during data fetch. The app is fully responsive for mobile, tablet, and desktop, and is designed with accessibility in mind.

The design guidelines suggested a white, black, and pink color palette, but I decided to go with the happier color green. 

### Dependency Installation & Startup Development Server

This project uses npm (Node Package Manager) to handle its dependencies and run the development server.

```bash
npm i && code . && npm run dev
```

### The Problem
I didn't have any major issues with this assignment, but several minor which were quite fun to troubleshoot. Here are a few examples: 

- Mobile browser "jumping" issue: My (real life) mobile browser "jumped" when I clicked the textarea to write a post. Found an article (linked below) and changed font-size to 16px, and added input:focus to the styling for mobile devices. 
  [Set focus and change font-size](https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone)

- Date/time stamp. It's tricky, so I used a lot of help from the world wide web and my Weather app project to get it right. 

- Textarea resizing: I accidently dragged the textarea corner and discovered that the end-user could resize it. I solved it by adding resize: none to the textarea styling.

- Like button: I wanted the like button to toggle between adding and removing a like, but I ran out of time. Currently, it adds a like each time it is clicked.

- Nesting problem: Every time I added a new className, I manually adjust the indentaion for every line below it. There has to be a better way of doing it than how I did. 

- Finding the correct font. I'm still not sure if I picked the right one. 

### A few useful sources in this project:
- [Box-shadow](https://www.w3schools.com/cssref/tryit.php?filename=trycss3_box-shadow)
- [CSS color palette](https://palettes.shecodes.io/palettes/1313#palette)
- [Like-button function](https://stackoverflowteams.com/c/technigo/questions/3669)
- [POST Happy thought on Submit](https://stackoverflowteams.com/c/technigo/questions/939)
- [Convert PNG to SVG](https://convertio.co/png-svg/)
- Google's Lighthouse tool to audit the website's accessibility. 
- [Check Contrast ratio](https://webaim.org/resources/contrastchecker/) 
- [Time stamp formatting](https://www.w3schools.com/jsref/jsref_tolocalestring.asp) and [Time formatting in the Project Weather App](https://github.com/joheri1/project-weather-app/)
- [Happy face](https://emojicombos.com/monospaced-font)
- [Animated Loading dots](https://css-loaders.com/dots/)

### If I had more time
- I want to load new posts on the HappyWall without reloading the whole page. 
- Currently, when I click the like button once, it behaves as expected, but if I click it twice, it adds another like instead of removing the first like. I started to look at that issue, and would complete it if I had more time.
- I'd split up the index.css into one CSS file for each component. 
- I'd like to move the like-container (containing the like button, heart icon and like counter) into its own component. The code in the HappyWall component is getting long and hard to read. 

### View it live

[Visit My Happy Thoughts Project](https://project-happy-thoughts-x.netlify.app/)
