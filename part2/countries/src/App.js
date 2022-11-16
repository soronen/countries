import './App.css';

import React, { useState, useEffect } from 'react'
import axios from 'axios'

import FindCountries from './components/FindCountries'
import DisplayCountries from './components/DisplayCountries'

function App() {

  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((result) => {
        setCountries(result.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)

    
    if (filter) {
      const regex = new RegExp( filter, 'i' );
      const filteredCountries = () => countries.filter(country => country.name.common.match(regex))
      setResults(filteredCountries)
    }

  }

  return (
    <div>
      <FindCountries filter={filter} onChange={handleFilterChange}></FindCountries>
      <DisplayCountries countries={results}></DisplayCountries>
    </div>

  );
}

export default App;
