import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const[loading,setLoading]=useState(true);
  const[job,setJob]=useState([]);
  const[value,setValue]=useState([2]);
   
  
  
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

// function filterJob(){
//   setValue(index);
// }
//  }
 if(loading){
  return <section className='section loading'><h1>Loading</h1></section>
}
const{title,company,duties,dates}=job[value];

  return <section className='section'>
    <div className='title'>Experince
    <div className='underline'></div> </div>
    <div className='jobs-center'>
      {/* btn container */}
      <div className='btn-container'>{job.map((jobs,index)=>{return <button onClick={()=>{setValue(index)}} key={index} className={`job-btn ${index===value && 'active-btn'}`} >{jobs.company}</button>})}</div>

      {/*Job Info*/}
      <article className='jobs-info'>
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className='job-date'>{dates}</p>
        {duties.map((duty,index)=>{return <div className='job-desc' key={index}><FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight><p>{duty}</p></div>})}
       
        {/* <p>{duties}</p> */}
      </article>
    </div>
   
    


  </section>
}

export default App
