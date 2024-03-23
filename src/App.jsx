import { PostCreator } from "./components/PostCreator"
import { PostWall } from "./components/PostWall"
import { Footer } from "./components/Footer"
import { GiveLoveButtons } from "./components/GiveLoveButtons"

export const App = () => {
  return (
    <>
      <PostCreator />
      <GiveLoveButtons />
      <PostWall />
      <Footer />
    </>
  )
}
