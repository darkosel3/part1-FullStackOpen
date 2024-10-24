import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const StatisticLine = ({text,value})=>{
  return(
    <p>{text} {value}</p>
  )
}

const Statistics = ({good,neutral,bad}) =>{
  let all = good+bad+neutral
  let average = (good - bad) / all
  if(all === 0){
    return <p>No feedback given</p>
  }
  return(
    <>
  <div>
    <StatisticLine value={good} text='Good'/>
    <StatisticLine value={neutral} text='Neutral'/>
    <StatisticLine value={bad} text='Bad'/>
  </div>
  <StatisticLine value={all} text='All'/>
  <StatisticLine value={average} text='Average'/>

  </>
)
}


const Button = ({text,handleClick}) =>{
  return(
    <button onClick={handleClick}>{text}</button>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad ] = useState(0)
  
  const handleGood = ()=>{
    setGood(good+1)
  }
  const handleBad = ()=>{
    setBad(bad+1)
  } 
  const handleNeutral = ()=>{
    setNeutral(neutral+1)
  }

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text='good' handleClick={handleGood}></Button>
      <Button text='neutral' handleClick={handleNeutral}></Button>
      <Button text='bad' handleClick={handleBad}></Button>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App
