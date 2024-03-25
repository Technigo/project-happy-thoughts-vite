import { PostCreator } from "./components/PostCreator"
import { PostWall } from "./components/PostWall"
import { Footer } from "./components/Footer"
import { PostTitle } from "./components/PostTitle"

export const App = () => {
  return (
    <>
      <PostTitle />
      <PostCreator />
      <PostWall />
      <Footer />
    </>
  )
}
