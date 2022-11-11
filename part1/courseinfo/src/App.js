const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part coursename={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part coursename={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part coursename={course.parts[2].name} exercises={course.parts[2].exercises} />
    </div>
  )
}

const Part = ({ coursename, exercises }) => {
  return (
    <>
      <p>course name: {coursename}, exercises: {exercises}</p>
    </>
  )

}

const Total = ({ course }) => {
  return (
    <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
  )
}

const App = () => {
  // const-definitions
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
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App