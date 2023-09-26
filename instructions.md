# Instructions
In this week's project, you'll be able to practice your React state skills by fetching and posting data to an API.

## Context:

We've built a simple API to collect 'happy thoughts'. Think of it as our own version of Twitter, but with less negativity, and 100% fewer Elon Musks using it.

The end result should look like this:

 <img src="/src/assets/examples/finished-example.png" alt="Finished Project Example">

To achieve this, we've built an API with three endpoints. Note that all of the thoughts you write will show up for everyone - this is a public API that you will all share.

## Fetch recent thoughts

`GET https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`

This will return the latest 20 thoughts from the API, looking something like this:

```json
[
  {
    "_id": "5dd671c864cc480017f40979",
    "message": "I'm happy because we're starting a fun new project",
    "hearts": 0,
    "createdAt": "2019-11-21T11:15:20.888Z",
    "__v": 0
  },
  {
    "_id": "5dd6759064cc480017f4097a",
    "message": "I just ate a super tasty lunch",
    "hearts": 0,
    "createdAt": "2019-11-21T11:31:28.547Z",
    "__v": 0
  }
]
```

## Create a thought

`POST https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts`

Send a POST request with a JSON body like this:

```json
{
  "message": "My happy thought"
}
```

If the request was successful and a thought was added, you'll get a response that looks like this:

```json
{
  "_id": "123456",
  "message": "My happy thought",
  "hearts": 0,
  "createdAt": "2019-11-21T11:31:28.547Z",
  "__v": 0
}
```

The message you send is validated - it must be present and be between 5 and 140 characters long. If it fails these validations, you'll get a response with detailed error information, which you could use to show a friendly error to the user.

## Like a thought

`POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like`>

When the user clicks the heart button on a thought, send a POST request (with no body) to this URL. **Replace THOUGHT_ID with the `_id` parameter of the thought the user clicked on**

## Hints and tips to complete the project 🤓

A good idea before you start writing code is to sketch out what kind of components you need, what their responsibility should be, and what kind of state you'll need. This will help you to have a clearer idea of what code you need to write. Once you've done that, a good idea is to start with listing the thoughts which are already in the API. Then move on to building a form to post a new thought, and finally implement the heart button on an existing thought.

When you submit the form to add a new thought, the API returns the new thought object in the same way it would look if it was part of the full list response. You can use this to avoid having to send a second API request to fetch all thoughts again after submitting a new thought. See the [react documentation](https://reactjs.org/docs/hooks-reference.html#usestate) for a more detailed explanation of adding an object to an existing array in state, but in a nutshell, you'll want to do something like this:

```
// Assuming you have this kind of state in your component:
const [thoughts, setThoughts] = useState([])

// Later, in your code which handles the form submission, you
// could have something which looks like this to send the new
// message, get the response from the API, and then add it to
// the thoughts array:
const handleFormSubmit = (event) => {
  event.preventDefault()

  // Send the POST request with the input from your form (instead
  // of 'Hello world' like this example does):
  fetch('<https://technigo-thoughts.herokuapp.com/>', {
    method: 'POST',
    body: JSON.stringify({ message: 'Hello world' })
  })
    .then((res) => res.json())
    .then((newThought) => {
      // Now you have `newThought` which is the response from the
      // API as documented at the top of this readme. You can use
      // it to update the `thoughts` array:
      setThoughts((previousThoughts) => [newThought, ...previousThoughts])
    })
}

```

## Requirements:

- Your page should follow the design as closely as possible
- You should list the most recent thoughts at the top and older thoughts at the bottom (sorted)
- Your thoughts should show the content of the message and how many likes they've received
- You should have a form to post new thoughts
- You should implement the heart button to send likes on a thought
- Adapting to the different viewports

## Stretch Goals
So you’ve completed the requirements? Great job! Make sure you've committed and pushed a version of your project before starting on the stretch goals. Remember that the stretch goals are optional.

### Intermediate Stretch Goals
- Show a count below the form input that updates as the user types and shows how many characters are remaining. Make it go red when the user has typed over 140 characters
- When POSTing a new thought, if the message was empty, too long, or too short, you get an error message back from the API. Use this to set some sort of `error` state to show a friendly message to your user. (Hint: Use the network tab of the developer tools in your browser)

### Advanced Stretch Goals
- Keep count of how many different posts you have liked (different from how many times a post has been liked). Keep count and display it in some way. You could even go as far as to store this number in localStorage so that when the page is reloaded, the initial state can be set from the number you've stored.
- Add an animation for when a new thought is submitted and appears in the list below
- Handle loading states. See hint below 👇
  When you initially fetch the list of recent thoughts, it might take a little time to get the response back from the API. During this time, you could show a loading message or spinner of some sort on the page. Use something like `const [loading, setLoading] = useState(true)` to make it so the page is loading by default, then call `setLoading(false)` once you get the response back from the API. With the new thought form and the heart button, you could choose to also show a loading state, or you could opt to do an [optimistic update](https://dev.to/tiagodcosta/being-optimistic-in-ui-511k) which means you update the UI before the API request has succeeded (making the assumption that it will be successful).
