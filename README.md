<h1 align="center">
  <a href="">
    <img src="/src/assets/happy-thoughts.svg" alt="Project Banner Image">
  </a>
</h1>

# Happy Thoughts Project

The goal is to create a Twitter (X)-like app that uses React state to fetch and post data to an API. The app includes an input field for submitting new posts and a wall displaying posted comments. Each post has a like button that changes color when clicked, and the submit button shows a 'loading' state during data fetch. The app is fully responsive for mobile, tablet, and desktop, and is designed with accessibility in mind.

### Backend Integration

This project is connected to a custom backend built with Node.js, Express, and MongoDB, hosted on Render. The backend handles data storage and retrieval for happy thoughts.

- **Backend Repository**: [Happy Thoughts API](https://github.com/joheri1/project-happy-thoughts-api)
- **Backend URL**: [https://project-happy-thoughts-api-gns9.onrender.com](https://project-happy-thoughts-api-gns9.onrender.com)

### Dependency Installation & Startup Development Server

This project uses npm (Node Package Manager) to handle its dependencies and run the development server.

```bash
npm i && code . && npm run dev
```

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
- [Set focus and change font-size](https://stackoverflow.com/questions/2989263/disable-auto-zoom-in-input-text-tag-safari-on-iphone)

### If I had more time
- Currently, when clicking on the like button once, it behaves as expected, but when clicking it twice, it adds another like instead of removing the first like. I started to look at that issue, and would complete it if I had more time.
- I'd split up the index.css into one CSS file for each component. 
- I'd like to move the like-container (containing the like button, heart icon and like counter) into its own component. The code in the HappyWall component is getting long and hard to read. 

### View it live

[Visit My Happy Thoughts Project](https://project-happy-thoughts-x.netlify.app/)
