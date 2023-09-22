import Apptodos from "./Apptodos";
import { useState } from "react";
const Todoslist = () => {
    let [todos, setTodos] = useState([])
    // let [address, setAddress] = useState('')
    //     let handleOnchangeName = (event) => {
    //         setAddress(event.target.value)
    //     }
    //     let handleOnclick = () => {
    //         if (!address) {
    //             alert('Missing todo')
    //             return
    //         }
    //     let newTodo = { id: Math.floor(Math.random() * 100000), title: address }
    //     setTodos([...todos, newTodo])
    //     setAddress('')
    // }
    let deleteTodo = (todo) => {
        setTodos(todos.filter(item => item.id !== todo.id))
    }
    let addTodo = (newTodo) => {
        setTodos([...todos, newTodo])
    }
    return (
        <>
            <Apptodos todos={todos}
                deleteTodo={deleteTodo}
                addTodo={addTodo} />
            {/* <input type='text' value={address} onChange={(event) => handleOnchangeName(event)} />
        <button onClick={() => handleOnclick()}>ADD</button> */}
        </>
    )
}
export default Todoslist;