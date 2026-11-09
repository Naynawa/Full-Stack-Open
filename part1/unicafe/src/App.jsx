import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}

const Statistics = (props) => {
  if (props.total != 0) {
    return (
      <div>
        <h2>statistics</h2>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.total} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} />
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <p>No feedback given</p>
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    const newGood = good + 1
    setGood(newGood)
    updateStatistics(newGood, bad)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    updateStatistics(good, bad)
  }

  const handleBadClick = () => {
    const newBad = bad + 1
    setBad(newBad)
    updateStatistics(good, newBad)
  }

  const calculateTotal = () => {
    const newTotal = total + 1
    setTotal(newTotal)
    return newTotal
  }

  const calculateAverage = (newTotal, newGood, newBad) => {
    const avg = (newGood - newBad) / newTotal
    setAverage(avg)
  }

  const calculatePositive = (newTotal, newGood) => {
    const pos = (newGood / newTotal) * 100
    setPositive(pos)
  }

  const updateStatistics = (newGood, newBad) => {
    const newTotal = calculateTotal()
    calculateAverage(newTotal, newGood, newBad)
    calculatePositive(newTotal, newGood)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </div>
  )
}

export default App