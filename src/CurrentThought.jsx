import { useEffect, useState } from "react"


function CurrentThought() {

  return (
    <div>CurrentThought
        <p>What is making you happy right now?</p>

    <form>
        <textarea className="inputBox"
        rows="5"
        cols="50"
        placeholder="Type here"
        /* value = new post */
        ></textarea>
        <button>Post message</button>
    </form>
    </div>
  )
}

