const Likes = ({ thought, setThoughts }) => {
    const handleLike = () => {
        fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, {
            method: "POST",
        })
            .then((res) => res.json())
            .then((updatedThought) => {
                setThoughts((prevThoughts) =>
                    prevThoughts.map((item) =>
                        item._id === updatedThought._id ? updatedThought : item
                    )
                );
            });
    };

    return (
        <div>
            <p>{thought.message}</p>
            <button onClick={handleLike}>❤️ {thought.hearts}</button>
        </div>
    );
};

export default Likes;
