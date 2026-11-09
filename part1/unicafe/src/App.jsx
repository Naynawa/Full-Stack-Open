import { useState } from 'react'

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
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {average}</div>
      <div>positive {positive}</div>
    </div>
  )
}

export default App