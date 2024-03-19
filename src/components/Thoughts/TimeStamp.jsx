import { useState, useEffect } from "react"
import PropTypes from "prop-types"

export const TimeStamp = ({ time }) => {
    const [timePosted, setTimePosted] = useState()
    const timeNow = new Date()

    useEffect(() => {
        setTimePosted(new Date({time}))
    }, []);
    
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
