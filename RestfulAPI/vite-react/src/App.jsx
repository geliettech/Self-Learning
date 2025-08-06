import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'

const URL = 'https://dummyjson.com/test';
function App() {
  const [temp, setTemp] = useState(0)

  useEffect(()=>{
    const fetchData = async () => {
      // try {
        const data = await fetch(URL);
        data.json().then((json) => {
          console.log(json);
          setTemp(json)
        })
      // }
    }
    fetchData();
  },[])



  return (
    <div className="App">
      <h1>Method is: {temp.method}</h1>
      <h1>Status is: {temp.status}</h1>
    </div>
  )
}

export default App
