export const Validation = ({ errorMessage }) => {
    return (
        <section className="validation-section">
            <p className="validation-msg">{errorMessage}</p>
            <p className="num-of-characters">Test</p>
        </section>
    )
}
