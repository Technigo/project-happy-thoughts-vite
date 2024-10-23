// PostDate.jsx

import { formatDistanceToNow } from 'date-fns';

export const PostDate = ({ recentThoughtDate }) => {
  const date = new Date(recentThoughtDate);
  const timeAgo = formatDistanceToNow(date, { addSuffix: true });

  return (
    <div className="post-date">
      <p>{timeAgo}</p>
    </div>
  );
};

