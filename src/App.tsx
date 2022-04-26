import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './pages/Todo';
import UserPages from './pages/UserPages';
import UserIitemPage from './pages/userIitemPage'

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
        {/* <Route path='/' element={<UserPages />} /> */}
        <Route path='/users' element={<UserPages />} />
        <Route path={'/user/:id'} element={<UserIitemPage />} />
        <Route path='/todos' element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
