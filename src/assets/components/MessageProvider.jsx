//Middlehand-component between MessageFetcher and the children PostThought and DisplayThought
//The components job: It allows the PostThought and DisplayThought components to access the message data and posting function without needing to directly manage the API logic.

import { DisplayThought } from "./DisplayThought"
import { PostThought } from "./PostThought"


export const MessageProvider = () => {
	return (
		<>
			<PostThought />
			<DisplayThought />
		</>
	)
}