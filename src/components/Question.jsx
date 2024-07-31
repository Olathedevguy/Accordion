import { useState } from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"
const Question = ({id, title, info}) => {

    const [show, setShow] = useState(false)

  return (
    <article className="question">
        
        <header>
        <h5>{title}</h5>
            <button onClick={() => setShow(!show)} className="question-btn">
                {
                    show ? <AiOutlineMinus /> : <AiOutlinePlus />
                }
            </button>
             
        </header>
       <p >
                {
                    show  && info  
                }
            </p>
    </article>
  )
}
export default Question