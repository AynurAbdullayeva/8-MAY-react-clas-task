import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import "./App.css"
import Card from './Components/Cards/Card'


function App() {
  const [movies,setMovies]=useState([])
  
 useEffect(()=>{
  fetch("https://www.omdbapi.com/?s=harry&apikey=9dad6aee")
  .then(res=>res.json())
  .then(data=>{
    setMovies(data.Search)
    console.log(data)
  })
 },[])
 

  return (
    <>
     <Header/>
     <Card movies={movies}/>
    </>
  )
}

export default App
