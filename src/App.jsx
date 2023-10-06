import React from "react";
import { Header } from "./Header";
import { CurrentThought } from "./CurrentThought";
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
<CurrentThought />
    </div>

    <div className="olderThoughts">

older thoughts listed here

    </div>
    </>
  )
};