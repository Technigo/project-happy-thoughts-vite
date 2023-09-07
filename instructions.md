# Instructions

## Happy Thoughts

In this week's project, you'll be able to practice your React state skills by fetching and posting data to an API.

### Context:

We've built a simple API to collect 'happy thoughts'. Think of it as our own version of Twitter, but with less negativity, and 100% fewer Elon Musks using it.

The end result should look like this:

 <img src="/src/assets/examples/finished-example.png" alt="Finished Project Example">

To achieve this, we've built an API with three endpoints. Note that all of the thoughts you write will show up for everyone - this is a public API that you will all share.

### Fetch recent thoughts

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

### Create a thought

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

### Like a thought

`POST <https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/THOUGHT_ID/like`>

When the user clicks the heart button on a thought, send a POST request (with no body) to this URL. **Replace THOUGHT_ID with the `_id` parameter of the thought the user clicked on**

### Hints and tips to complete the project 🤓

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

### Requirements:

- Your survey should consist of at least 3 questions.
- At least one question should use radio buttons.
- At least one question should use a select dropdown.
- There should be a submit button. When pressed your app should hide the input form and show a summary of the user's submissions.

### Your page should be responsive:

- Adapting to the different viewports

### Design

How you design your page is up to you, but take accessibility into account when you are styling your form elements - so inputs should have labels and should be easily readable and usable. We STRONGLY recommend having some kind of design or sketch before starting to code.

Feel free to use other survey tools such as Typeform, Google Forms as inspiration. Or you can check out Dribbble, Behance or Pinterest.
