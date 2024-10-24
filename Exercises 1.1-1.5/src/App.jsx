const Header = ({course}) =>{
  return (<h1>{course}</h1>)
}
const Part = ({part}) =>{
  return(<>
    <h1>{part.name} {part.exercises}</h1>
    </>)
}
const Content = ({parts}) =>{
  return (
    <>
      {console.log(parts[0].name)}
      {
        parts.map((part,index)=>(
          <Part key={index} part={part}/>
        ))
      }
    </>
  )
}
const Total = ({parts}) => {
  let result = parts.reduce((acc,cur)=>{
    return acc + cur.exercises;
  },0);
  console.log(parts)
  return(
     <>
      <p>Number of exercises {result}</p>
    </>
  )
}



const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

export default App