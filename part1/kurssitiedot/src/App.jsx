const Header = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part text = {props.parts[0]} number = {props.exercises[0]}/>
      <Part text = {props.parts[1]} number = {props.exercises[1]}/>
      <Part text = {props.parts[2]} number = {props.exercises[2]}/>
    </div> 
  )
}

const Part = (props) => {
  return (
    <p>
        {props.text} {props.number}
    </p>
  )
}

const Total = ({sum}) => {
  return (
    <p>Number of exercises {sum}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header title={course}/>
      <Content parts = {[part1,part2,part3]} exercises = {[exercises1, exercises2, exercises3]}/>
      <Total sum = {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App