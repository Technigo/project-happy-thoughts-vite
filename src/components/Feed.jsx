import { SingleThought } from "./SingleThought.jsx"

export const Feed = ({ thoughtData, onLikeChange }) => {
	return (
		<section className='feed-container'>
			{thoughtData.map((eachThought) => {
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
