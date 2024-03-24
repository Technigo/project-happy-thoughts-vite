import { useState } from "react"

export const GiveLoveButtons = ({ setLikesPerClick }) => {
  const [activeButton, setActiveButton ] = useState(null) //useState to have just one button active

  const handleButtonClick = (numLikes) => {
    setLikesPerClick(numLikes)  
    setActiveButton(numLikes)
  }

  return (
    <div className="give-love-container">
      <p>How much love do you want to give?</p>
      <div>
        <button 
          className={`give-love-buttons ${activeButton === 1 && "active"}`}//Some styling condition if or not active
          onClick={() => handleButtonClick(1)}
        >
          x 1
        </button>
        <button 
          className={`give-love-buttons ${activeButton === 10 && "active"}`}
          onClick={() => handleButtonClick(10)}
        >
          x 10
        </button>
        <button 
          className={`give-love-buttons ${activeButton === 100 && "active"}`}
          onClick={() => handleButtonClick(100)}
        >
          x 100
        </button>
      </div>
    </div>
  );
};