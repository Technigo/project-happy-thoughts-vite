
/*export function TimeAgo({createdAt}) {
  const currentDate = new Date();

  const createdAtDate = new Date(createdAt);

  const timeDifference = currentDate - createdAtDate;

  const minutesAgo = Math.floor(timeDifference / (1000 * 60));
  
  if (minutesAgo < 1) {
    return 'Just now';
  } else if (minutesAgo === 1) {
    return '1 min ago';
  } else {
    return `${minutesAgo} mins ago`;
  }

}


function TimeAgo({ createdAt }) {
  const formattedTime = TimeAgo({ createdAt }); // Call the TimeAgo function correctly

  return (
    <div>
      Updated: {formattedTime} {/* Use curly braces {} to interpolate the value 
    </div>
  );
}


/*
return (
  <>
  const formattedTime = TimeAgo({ createdAt });

  <div>
    Updated: {formattedTime} = TimeAgo(createdAt);
</div>)
//console.log(formattedTime); // Output: "Just now" or "X mins ago"
</>*/