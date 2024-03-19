import { useEffect, useState } from "react"
import "./styling/form.css"

export const Form = ({ newThought, data, url }) => {
	const [newPost, setNewPost] = useState("")
	const [errorMsg, setErrorMsg] = useState("")

	//set error message if message exceeds 140 characters
	useEffect(() => {
		if (newPost.length >= 141) {
			setErrorMsg("Your message is too long. Keep your happy thoughts shorter.")
		} else {
			setErrorMsg("")
		}
	}, [newPost])
}
