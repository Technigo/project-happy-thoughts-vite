# Happy thoughts Project

A project to fetch happy thoughts from API and post new thoughts on it. All posts can be interacted with being clicked like.

My working flow:

1. create components of header, inputbox, postbox and footer;
2. Fetch all thoughts from API and show it in the posts component;
3. Complete the function of creating and posting a thought on server
4. Complete the function of heart button
5. Final styling

### The Problem

After I completed the function of creating and sending a post, the new thought cannot be shown before loading the page. Then I found out that the props from "inputbox" needs to be passed in the component of "postbox" so the updated thoughts can be shown.

### View it live

https://jingshappythoughts.netlify.app/
