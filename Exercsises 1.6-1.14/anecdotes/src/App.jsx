import { useState } from 'react'
import './App.css'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  

  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [selected, setSelected] = useState(0)
  const [biggest, setBiggest] = useState(0)
  const generateQuote = ()=>{
    let random = Math.floor(Math.random()*8)
    setSelected(random)   
  }
  
  const updateVotes =()=>{
    const result = [...points]
    result[selected] = points[selected] + 1
    let biggestInd = result[0]
    let biggestNum = 0
    result.forEach((num,ind)=>{
    if(num > biggestNum){
        biggestNum = num
        biggestInd = ind
      }
    })
    if(result[biggest] !== biggestNum                                                      ){
      setBiggest(biggestInd)
    }
    setPoints(result)
    
  }
  return (
    <div>
      {anecdotes[selected]}
      <button onClick={generateQuote}>Next quote</button>
      <p>{points[selected]}</p>
      <button onClick={updateVotes}>Vote</button>
      <div>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[biggest]}</p>
      </div>
    </div>
  )
}

export default App