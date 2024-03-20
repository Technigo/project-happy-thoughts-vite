//import { useState, useEffect } from "react"
import PropTypes from "prop-types"

export const TimeStamp = ({ time }) => {
    /*const [timePosted, setTimePosted] = useState("")
    const setTime = () => {
      setTimePosted(()=> new Date(time))
    }
    const timePosted = new Date({ time });
    
    const timeNow = new Date()

    useEffect(() => {
        setTime()
    }, [])*/
    
    /*useEffect(() => {
      console.log("Posted", timePosted)
      console.log("Now", timeNow);
    }, [timePosted]);*/
    
  return (
    <div className="time-box">
      <p>Posted {time}</p>
    </div>
  );
};

TimeStamp.propTypes = {
  time: PropTypes.string,
};

//https://date-fns.org/