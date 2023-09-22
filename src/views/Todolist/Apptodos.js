import { useState } from "react"
const Apptodos = ({ todos, deleteTodo, addTodo }) => {
    let [address, setAddress] = useState('')
    let handleOnclickDelete = (item) => {
        deleteTodo(item)
    }
    // let handleOnchangeName = (event) => {
    //     setAddress(event.target.value)
    // }
    let handleOnclick = () => {
        if (!address) {
            alert('Missing todo')
            return
        }
        let newTodo = { id: Math.floor(Math.random() * 100000), title: address }
        // setTodos([...todos, newTodo])
        addTodo(newTodo)
        setAddress('')
    }
    return (
        <div className='todos-container'>
            {todos.map((item, index) => {
                return (
                    <li className='todos-child' key={item.id}>
                        {index + 1} - {item.title} <span onClick={() => handleOnclickDelete(item)}>X</span>
                    </li>
                )
            }
            )
            }
            <input type='text' value={address} onChange={(event) => setAddress(event.target.value)} />
            <button onClick={() => handleOnclick()}>ADD</button>
        </div>
    )
}
export default Apptodos;
