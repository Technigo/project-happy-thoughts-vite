import React from "react";
import { Header } from "./Header";
import { PostThought } from "./CurrentThought";
import { OlderThoughts } from "./OlderThoughts";


export const App = () => {

  return (
    <>
    <div>
      <Header />
      </div>
      <section className="main-body">
      <h2>Technigo Education Team</h2>
      </section>
    
    <div className="currentThought">
<PostThought />
    </div>

    <div className="olderThoughts">
<h2>See what makes others happy</h2>

<OlderThoughts />
    </div>
    </>
  )
};