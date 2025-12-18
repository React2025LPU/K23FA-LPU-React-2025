
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo , deleteTodo} from './TodoSlicer';


const TodoUI = () => {

  const [newvalue, setnewvalue] = useState("");
  const updatedTodoValues = useSelector(state=>state.todoReducer.todoitem);
  const dispatch = useDispatch();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(newvalue===""){
      return;
    }
    dispatch(addTodo(newvalue));
    setnewvalue("");
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type='text' className='border-2 border-black border-solid'
        value={newvalue} onChange={(e)=>setnewvalue(e.target.value)} />
        <button>Add Item</button>
      </form>
      <ul>
        {
          updatedTodoValues.map((item) =>{
            return(
              <li key={item.id}>
                {item.text}
                <button onClick={()=>dispatch(deleteTodo(item.id))}>Delete</button>
              </li>
            )
          })

        }
      </ul>
      

    </div>
  )
}

export default TodoUI
