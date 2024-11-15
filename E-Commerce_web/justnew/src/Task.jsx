
export const Task = (props) => {
  return (
    <>
    <div className='taskbutton'>
  
               <h2>{props.taskName}</h2> 
   
    <input type="radio" checked={props.done}  onChange={() => props.doneTask(props.id)} />
    <button className='btn1' onClick={() => props.deleteTask(props.id)}>X</button>
   
  </div>
  </>
  )
}

