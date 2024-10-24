/*Make the codes with timestamps works as a comment , we may have to delete this file
const Likes = ({ thought, setThoughts }) => {
    const handleLike = () => {
        fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, {
            method: "POST",
        })
            .then((res) => res.json())
            .then((updatedThought) => {
                if (updatedThought.hearts !== undefined && updatedThought.hearts !== null) {
                    // Ensure the hearts count is a valid number and default to 0 if it's not
                    setThoughts((prevThoughts) =>
                        prevThoughts.map((item) =>
                            item._id === updatedThought._id
                                ? { ...item, hearts: updatedThought.hearts ?? 0 } // Default to 0
                                : item
                        )
                    );
                }
            })
            .catch((error) => {
                console.error("Error updating likes:", error);
            });
    };

    return (
        <div className="message">
            <p>{thought.message}</p>
            <button className="heart-button" onClick={handleLike}>
                ❤️ {thought.hearts ?? 0} {/* Display 0 if hearts is null or undefined */}
                </button >
                </div >
            );
        };

export default Likes;
        */
