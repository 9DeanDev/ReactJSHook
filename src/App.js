import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav/Nav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomersList from './views/CustomersList';
import Timer from './views/Countdown/Timer';
import Todoslist from './views/Todolist/Todoslist';
import Blogs from './views/Blogs/Blogs';
import Blogdetails from './views/Blogs/Blogdetails';

function App() {

  // let [todo, setTodo] = useState({
  //   id: '', title: ''
  // })

  // let handleOnchangeName = (event) => {
  //   setTodo({ id: Math.floor(Math.random() * 100000), title: event.target.value })
  // }
  // let handleOnclick = () => {
  //   if (!todo.title) {
  //     alert('Missing todo')
  //     return
  //   }
  //   setTodos([...todos, todo])
  //   setTodo({ title: '' })
  // }

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>HELLO WORLD WITH REACT</div>
          <Routes>
            <Route path="CustomersList" exact element={<CustomersList />} />
            <Route path="Timer" element={<Timer />} />
            <Route path="TodosList" element={<Todoslist />} />
            <Route path="Blogs" element={<Blogs />} />
            <Route path="Blogs/:id" element={<Blogdetails />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
