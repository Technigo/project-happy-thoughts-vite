import { formatDistance } from "date-fns";

export const ThoughtList = ({ getThought, loadingThoughts, setLoadingThoughts }) => {
    const onThoughtCheckChange = (newThought) => {
        const updatedThought = { ...newThought, isChecked: !newThought.isChecked }

        fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/check`, {
        method: "POST",
        headers: { updatedThought, "Content-Type": "application/json" },
        body: JSON.stringify({
            isChecked: updatedThought.isChecked,
        }),
       })
       .then((response) => response.json())
       .catch((error) => {
        console.log(error)
       })

       setLoadingThoughts((loadingThoughts) => 
       loadingThoughts.map((singleThought) => 
       singleThought._id === thought._id ? updatedThought : singleThought
       ))

    }
    return (
        <section className="thoughts">
            {loadingThoughts
            .map((newThought) => (
            <div key={thought._id} className="thought">
                <input 
                onChange={() => onThoughtCheckChange(newThought)}
                type="checkbox"
                checked={newThought.isChecked}
                />
                  <h4>{task.description}</h4>
            <p>
              {formatDistance(new Date(task.date), new Date(), {
                addSuffix: true,
              })}
            </p>
          </div>
        ))
        .reverse()
        .slice(0, 10)}

        </section>
    )
}