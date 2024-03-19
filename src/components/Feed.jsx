import "./styling/feed.css"
import { SingleThought } from "./SingleThought.jsx"

export const Feed = ({ thought, onLikeChange }) => {
	return (
		<section className='feed-container'>
			{thought.map((eachThought) => {
				return (
					<SingleThought
						key={eachThought._id}
						eachThought={eachThought}
						onLikeChange={onLikeChange}
					/>
				)
			})}
		</section>
	)
}
