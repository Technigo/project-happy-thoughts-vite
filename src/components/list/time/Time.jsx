import "./time.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

// this function calculates the difference between the current time (now) and the time when the message has been posted (createdDate). createdAt is the parameter which repesents when the event occured.
const getTimeDifference = (createdAt) => {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const differenceInSeconds = Math.floor((now - createdDate) / 1000)

  if (differenceInSeconds < 60) return `${differenceInSeconds} seconds ago`
  if (differenceInSeconds < 3600) return `${Math.floor(differenceInSeconds / 60)} minutes ago`
  if (differenceInSeconds < 86400) return `${Math.floor(differenceInSeconds / 3600)} hours ago`
  if (differenceInSeconds < 2592000) return `${Math.floor(differenceInSeconds / 86400)} days ago`
  return `${Math.floor(differenceInSeconds / 2592000)} months ago`
}

export const Time = ({ createdAt }) => {
  const [timeAgo, setTimeAgo] = useState(getTimeDifference(createdAt))
  useEffect(() => {
    const timer = setInterval(() => setTimeAgo(getTimeDifference(createdAt)), 60000)
    return () => clearInterval(timer)
  }, [createdAt]);
  return <span className="time">{timeAgo}</span>
}

Time.propTypes = {
  createdAt: PropTypes.string.isRequired,
}