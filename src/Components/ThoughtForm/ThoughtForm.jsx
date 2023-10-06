import style from './ThoughtForm.module.css'


export const ThoughtForm = () => {
  return (
    <div className='style.thought-form-style'>
        <h2>What is making you happy right now?</h2>

        <input id="thought-input" type="text" placeholder="What's making you happy right now?" />
        <button>Send Happy Thought</button>
    </div>
  )
}
