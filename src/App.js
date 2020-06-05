import React, { useState } from 'react';
import './App.css';
import Todo from './Todo';
const App=()=>{
    const[input,setInput]=useState({
      task:'',
      waqt:''
    });
    const [list,setList]=useState([]);
    const [listwaqt,setListWaqt]=useState('');
  const changed=(e)=>{
    const {name,value}=e.target;
    if(name==="task"){
      setInput((old)=>{
        return{
          task:value,
          waqt:old.waqt
        }
      })
    }
    else if(name==="waqt"){
      setInput((old)=>{
        return{
          task:old.task,
          waqt:value
        }
      })
    }
  }
  const clicked=()=>{
    setList((prev)=>{
      return [...prev,input.task];
    })
    setInput((curr)=>{
      return{
      task:'',
      waqt:''
      }
    });
    setListWaqt(()=>{
      return [input.waqt];
    })

  }
  return(
    <>
      <h1>Enter tasks</h1>
      <input type="text" placeholder="tasks likho" name="task" onChange={changed} value={input.task}/>
      <br/>
      <br/>
      <br/>
      <input type="date" placeholder="date likho" name="waqt" onChange={changed} value={input.waqt}/>
      <button onClick={clicked}>Add IT</button>
      <ol>
      {list.map((val)=>{
        return(
          <Todo text={val}/> 
        )
      })
    
    }
      
      
      </ol>
    </>

  );
}
export default App;