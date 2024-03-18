import { useEffect, useState } from "react";

export const PostTime = ({ post }) => {
  const [timeAgo, setTimeago] = useState("");

  useEffect(() => {
    const currentTime = new Date();
    const createdTime = new Date(post.createdAt);
    const timeDifference = currentTime - createdTime;

    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    let displayTimeAgo = "";

    if (days === 1) {
      displayTimeAgo = `${days} day ago`;
    } else if (days > 1) {
      displayTimeAgo = `${days} days ago`;
    } else if (hours === 1) {
      displayTimeAgo = `${hours} hour ago`;
    } else if (hours > 1) {
      displayTimeAgo = `${hours} hours ago`;
    } else if (minutes === 1) {
      displayTimeAgo = `${minutes} minute ago`;
    } else if (minutes > 1) {
      displayTimeAgo = `${minutes} minutes ago`;
    } else if (seconds === 1) {
      displayTimeAgo = `${seconds} second ago`;
    } else {
      displayTimeAgo = `${seconds} seconds ago`;
    }

    setTimeago(displayTimeAgo);
  }, [post.createdAt]);

  return <p className="post-time">{timeAgo}</p>;
};
