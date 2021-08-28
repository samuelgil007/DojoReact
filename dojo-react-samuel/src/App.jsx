import React, { useImperativeHandle, useState, usserEfect } from 'react'
import './App.css'
import CountriesList from './Components/CountriesList'
import getCountries from './Services/getCountries'

function App() {
  const [input, setInput] = useState("")
  const [continent, setContinent] = useState("")
  const [countries, setCountries] = useState([])

  usserEfect(() => {
    getCountries(continent).then(res => {
      setCountries(res)
    })
  }, [continent])

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.prevent.default()
    setContinent(input)
  }

  return (
    <div className="App">
      <p>{continent}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} value={input} />
        <button>Buscar</button>
      </form>
     <CountriesList countries={countries}></CountriesList>
    </div>
  )
}

export default App
