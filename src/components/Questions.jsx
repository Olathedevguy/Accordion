import Question from "./Question"

const Questions = ({question, setQuestion}) => {
  return (
    <section className="container">
        <h1>Questions</h1>
        <div>
            {
                question.map((item) => (
                    <Question key={item.id} {...item}/>
                ))
            }
        </div>
    </section>
  )
}
export default Questions