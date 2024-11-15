// eslint-disable-next-line

import './App.css';
import { User } from './User';
import { Task } from './Task';

import {useState} from 'react'

function App() {



  const users = [
    { name: "Lanre", age: 28},
    {  name: "Mosh", age: 26},
    { name:"Gratar", age: 57},
  ]
  
  const planets = [
    { name: "Mars", isGasPlanet: false},
    { name: "Earth", isGasPlanet: false},
    { name: "Jupiter", isGasPlanet: true},
    { name: "Venus", isGasPlanet: false},
    { name: "Neptune", isGasPlanet: true},
    { name: "Uranus", isGasPlanet: true},


  ]

  
  const fruits = ['Apple', 'Banana', 'Cherry'];

  const [count, setCount] = useState(0)

  const increaseCount = () =>{
    setCount(count + 1)
  }

  const decreaseCount = () =>{
    setCount(count - 1)
  }

  const setCountToZero = () =>{
    setCount(0)
  }


  const planetList = [
    { name: "Mars", isGasPlanet: false},
    { name: "Earth", isGasPlanet: false},
    { name: "Jupiter", isGasPlanet: true},
    { name: "Venus", isGasPlanet: false},
    { name: "Neptune", isGasPlanet: true},
    { name: "Uranus", isGasPlanet: true},


  ]


  const [planetLists, setPlanetLists] = useState(0)

  const handleNext = () =>{
    if (planetLists < planetList.length - 1) {
      setPlanetLists(planetLists + 1);
  }
  }

  const handlePrev = () =>{
    if (planetLists > 0) {
      setPlanetLists(planetLists - 1);
  }

  }

  const [todoList, setTodoList] = useState ([])
  const [newTask, setNewTask] = useState("")
  

  const handleChange = (e) => {
    setNewTask(e.target.value)

  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id +1,
      taskName: newTask,
      done: false,

    }
    setTodoList([...todoList, task])
    
  }

  const deleteTask = (id) =>{
     setTodoList(todoList.filter((task) => (task.id !== id)))}


  const doneTask = (id) => {
    setTodoList(todoList.map((task) => task.id === id ? {...todoList, done: !task.done} : task))
  }


  




  return (
    <>
    
   <div className="To-do">
    <div className="addTask">
      <input onChange={handleChange}/>
      <button onClick={addTask}>Add Task</button>
    </div>
    <div className="lists">
      {todoList.map((task)=>{
          return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} doneTask={doneTask} />
           

      })}
    </div>
   </div>



<div className='App'>
    <h1>Planet: {planetList[planetLists].name}</h1>
    <h1>Status: {planetList[planetLists].isGasPlanet ? "Gas Planet" : "Not Gas planet"}</h1>
   <button style={{backgroundColor: 'red'}} onClick={handlePrev} disabled={planetLists === 0}>Next</button>
   <button style={{backgroundColor: 'green'}} onClick={handleNext} disabled={planetLists === planetList.length - 1} >Prev.</button>
   
</div>



    <div className='App'>
     <h1>{count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={setCountToZero}>Set to Zero</button>
      
     
    </div>


      {/* {isCorrect ? <div style={{backgroundColor: "green"}}></div>: <div
        style={{backgroundColor: "red"}}>
      <div className="App">
      <title>My web</title>
      <h1>Welcome to my Web!</h1>

      </div>
      </div> } */}

<ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>

      <div className="App">
        {users.map((user, key) =>{
          return <User name={user.name} age={user.age}/>
        })}

        {/* {planets.map((planet, key) => {
          if (!planet.isGasPlanet) return <h1> {planet.name} </h1>
        })} */}


        {planets.map((planet, key) => planet.isGasPlanet && <h1> {planet.name} </h1>
        )}

      </div>
      

    </>
  );
}


export default App;
