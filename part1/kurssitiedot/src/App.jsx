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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header title={course}/>
      <Content parts = {[part1.name,part2.name,part3.name]} exercises = {[part1.exercises,part2.exercises,part3.exercises]}/>
      <Total sum = {part1.exercises+part2.exercises+part3.exercises}/>
    </div>
  )
}

export default App