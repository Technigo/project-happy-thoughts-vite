// components/CreatedAt.jsx
import { formatDistanceToNow } from 'date-fns';

export const CreatedAt = ({ createdAt }) => {
  return (
    <span className="timestamp">
      {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
    </span>
  );
};