import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState({
    anecdote: 0, votes: Array(anecdotes.length).fill(0)
    })

  const randomAnecdote = () => {
    setSelected({ ...selected, anecdote: Math.floor(Math.random() * anecdotes.length)})
  } 

  const addVote = () => {
    const votes = [...selected.votes]
    votes[selected.anecdote] += 1

    setSelected({...selected, votes: votes})
  }

  console.log(selected.votes);
  console.log(Math.max(...selected.votes));
  return (
    <div>
      <div>
        <h1>Anecdote of the day: </h1>
        <p>{anecdotes[selected.anecdote]}</p>
        <p>Has {selected.votes[selected.anecdote]} votes</p>
      </div>
      <button onClick={randomAnecdote}>New anecdote</button>
      <button onClick={addVote}>Vote</button>
      
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[selected.votes.indexOf(Math.max(...selected.votes))]}</p>

    </div>
  )
}

export default App