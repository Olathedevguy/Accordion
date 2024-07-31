import { useState } from "react"
import Questions from "./components/Questions"
import data from '../data'
const App = () => {

  const [question, setQuestion] = useState(data)

  return (
    <main>
      <Questions question={question} setQuestion={setQuestion}/>
    </main>
  )
}
export default App