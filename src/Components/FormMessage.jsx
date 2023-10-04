

export const FormMessage = () => {
  return (
    <div className="post-wrapper">
        <h3>What is making you happy right now?</h3>
        <form action="">
            <textarea name="" id="" cols="30" rows="3" placeholder="Musuc , Love , Food..."></textarea>
            <div className="post-length">
                <p className="error">Your message is too short, it needs at least 5 letters </p>
                <p className="length">0/120</p>

            </div>
            <button type="submit" className="post-btn">
                <span className="emoji">❤️</span>
                Send Happy Thoughts
                <span className="emoji">❤️</span>
            </button>
        </form>

    </div>
  )
}
