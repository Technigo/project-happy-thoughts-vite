# Happy Thoughts App
This project is a React-based application that allows users to share their happy thoughts with others. Users can submit short messages (thoughts), and view a list of all submitted thoughts along with their like counts. The app also includes features such as validation for thought submission, a character counter, and a fun heart animation when submitting thoughts.

Key Features:
Users can enter their thoughts in a form and submit them to the app.
Thoughts are limited to a maximum of 140 characters and must be at least 5 characters long.
On successful submission, the thought is added to the list of thoughts, and the input is cleared.

Like Thoughts: Each thought has a like button that allows users to "like" a thought by clicking on a heart icon. The number of likes (hearts) is updated both locally and on the backend.
Users can "unlike" a thought by clicking the heart again.

Local storage is used to persist liked thoughts across page reloads.

Heart Animation: A heart animation appears when a user submits a new thought, providing a delightful visual confirmation.

Character Count: As users type their thought, a character counter is displayed to show how many characters remain before reaching the 140-character limit.

Validation messages appear if the user attempts to submit a thought that doesn't meet the requirements.

Time Ago:
Each thought is tagged with the time it was submitted (e.g., "3 minutes ago", "2 days ago").
The time difference updates every minute to reflect the most accurate "time ago" format.

Responsive Design: The app is responsive and works well on mobile and desktop screens, ensuring a smooth experience across different devices.

# Tech Stack
React: Used for creating interactive UI components, managing state, and handling events.

CSS: Custom styling is used to design a clean and user-friendly interface.

Local Storage: Local storage is utilized to remember liked thoughts, even after page refreshes.

PropTypes: Ensures the correctness of props passed to React components.

API Integration: API calls are made to store and fetch thoughts from a backend server (mocked with functions postThought and likeThought).

Hooks: The app utilizes custom hooks (useState, useEffect, useFetchThoughts) for managing state and side effects.

## view it live
https://post-happy-thoughts.netlify.app/