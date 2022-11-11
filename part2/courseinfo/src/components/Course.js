
const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Content = ({ course }) => {
    console.log("course")
    console.log(course)
    return (
        <ul>
            {course.parts.map((element, index) =>
                <Part key={element.name} coursename={element.name} exercises={element.exercises} />
            )}
        </ul>
    )
}

const Part = ({ coursename, exercises }) => {
    return (
        <>
            <li>course name: {coursename}, exercises: {exercises}</li>
        </>
    )

}

const Total = ({ course }) => {
    console.log("course parts", course.parts[0].exercises + course.parts[1].exercises);

    return (
        <p>Number of exercises:&nbsp;
            {course.parts.reduce((sum, currentElement) => sum + currentElement.exercises, 0)}
        </p>
    )
}


const Course = ({ course }) => {
    console.log(course)
    return (
        <div>
            <Header course={course}></Header>
            <Content course={course}></Content>
            <Total course={course}></Total>
        </div>

    )
}
export default Course
