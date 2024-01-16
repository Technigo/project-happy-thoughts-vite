import { Form } from './components/Form.jsx'
import { Header } from './components/Header.jsx'
import { Feed } from './components/Feed.jsx'

export const App = () => {
  return (
    <div id="app-container">
      <div id="content-wrapper">
    <Header />
    <Form />
    <Feed />
    </div>
    </div>
  )
}
