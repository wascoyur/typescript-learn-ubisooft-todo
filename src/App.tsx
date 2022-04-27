import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TodoItemPage from './pages/TodoItemPage';
import { TodoItem } from './component/TodoItem';
import Todo from './pages/TodosPage';
import UserIitemPage from './pages/userIitemPage';
import UserPages from './pages/UserPages';

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          backgroundColor: 'grey',
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: '1rem',
        }}>
        {/* <div className='App'>Home</div> */}
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <NavLink to='/todos'>Todos</NavLink>
      </nav>

      <Routes>
        {/* <Route path='/' element={<App />} /> */}
        <Route path='/users' element={<UserPages />} />
        <Route path={'/users/:id'} element={<UserIitemPage />} />
        <Route path='/todos' element={<Todo />} />
        <Route path='/todos/:id' element={<TodoItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
