import { Footer } from "./components/Footer"
import { PostCreator } from "./components/PostCreator"
import { PostWall } from "./components/PostWall"


export const App = () => {
  return (
    <>
      <PostCreator />
      <PostWall />
      <Footer />
    </>
  )
}
