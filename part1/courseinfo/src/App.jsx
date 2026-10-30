// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

const Header = (props) => {
  return (
  <h1>{props.course}</h1>
)
}
const Content = (props) => {
  return (
    <>
    <p>
        {props.parts[0].part} {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].part} {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].part} {props.parts[2].exercises}
      </p>
    </>
  )
}
const Total = (props) => {
  return (
     <p>Number of exercises {props.total}</p>
  )
}

const App = () => {
 const course = 'Half Stack application development'
 const parts = [
  {part:'Fundamentals of React', exercises: 10},
  {part:'Using props to pass data', exercises: 7},
  {part:'State of a component', exercises: 14}
 ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total total={parts[0].exercises + parts[1].exercises + parts[2].exercises} />
    </div>
  )
}

export default App