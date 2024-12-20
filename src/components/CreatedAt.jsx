// CreatedAt.jsx 

import { formatDistanceToNow } from 'date-fns';

export const CreatedAt = ({ createdAt }) => {
  return (
    <span className="timestamp">
      {/* Converts timestamp to "X time ago" format */}
      {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
    </span>
  );
};