### LINKS
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  //https://momentjs.com/ 
  //https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
  //https://www.w3schools.com/jsref/jsref_stringify.asp

### Console log JSON data
//https://www.w3schools.com/jsref/jsref_stringify.asp 

console.log(JSON.stringify(data, null, 2));

makes it look like: 

{
    "_id": "6522c39525dcd40010116981",
    "message": "Are you happy?",
    "hearts": 1,
    "createdAt": "2023-10-08T14:58:29.357Z",
    "__v": 0
  },
  {
    "_id": "6522bf0a25dcd4001011697e",
    "message": "hello",
    "hearts": 3,
    "createdAt": "2023-10-08T14:39:06.028Z",
    "__v": 0
  },

### TimeDate
https://momentjs.com/

Relative Time
moment("20111031", "YYYYMMDD").fromNow(); // 12 years ago
moment("20120620", "YYYYMMDD").fromNow(); // 11 years ago
moment().startOf('day').fromNow();        // 17 hours ago
moment().endOf('day').fromNow();          // in 7 hours
moment().startOf('hour').fromNow();       // an hour ago


 ### HeartClick:
1. const heartURL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${heartLikes._id}/like";
-use ``!! and not '' or ""
-back ticks when ${} - they are Template literals 
-see tempelate literals link
// Defines the URL for updating the heart count on the server.

2. -return can only return a single parent element, remember to wrap into one. in this case button and span. 

3 . HeartLikes holds data about the post's likes, while onLike is a function that gets triggered when the user interacts with the heart button, allowing to update or perform actions related to liking the post.

4. Allow more likes per user by still counting their likes, what needs to me removed is //:

const handleHeartClick = async () => {

    // const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '[]');
    // if (!likedPosts.includes(heartLikes._id)) {

      setLikes(prevLikes => prevLikes + 1);
      setIsLiked(true);

      // likedPosts.push(heartLikes._id);
      // localStorage.setItem('likedPosts', JSON.stringify(likedPosts));

      const heartURL = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${heartLikes._id}/like`;

      try {
        const update = await fetch(heartURL, {
          method: 'POST',
        });
        if (!update.ok) {
          throw new Error('Failed to update heart count');
        }
        if (onLike) {
          onLike(heartLikes._id);
        }
        if (onLikeUpdate) {
          onLikeUpdate();
          console.log('onLikeUpdate called');
        }
      } catch (error) {
        console.error("Error updating the heart count:", error);
      }
    // }
};
