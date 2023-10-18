import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const[loading,setLoading]=useState(true);
  const[job,setJob]=useState([]);
  const[value,setValue]=useState([0]);
   
  
  
  const fetchApi=async()=>{
    const response=await fetch(url);
    const result=await response.json();
    setJob(result);
    setLoading(false)
    console.log(job);
  }

  useEffect(()=>{
    fetchApi()
   
  }
 ,[])
 if(loading){
  return <section className='section loading'><h1>Loading</h1></section>
}

  return <h2>Jobs</h2>
}

export default App
