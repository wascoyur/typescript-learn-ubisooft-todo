import './App.css';
import EventExample from './component/EventExample';

function App() {
  // const [users, setUsers] = useState<IUser[]>([]);
  // const [todos, setTodos] = useState<ITodo[]>([]);

  // const fetchUsers = async () => {
  //   try {
  //     await axios
  //       .get<IUser[]>('https://jsonplaceholder.typicode.com/users')
  //       .then((res) => setUsers(res.data));
  //   } catch (error) {
  //     alert(error);
  //   }
  // };
  // const fetchTodos = async () => {
  //   try {
  //     await axios
  //       .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?limit=10')
  //       .then((res) => setTodos(res.data));
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUsers();
  //   fetchTodos();
  // }, []);

  return <div className='App'>Home</div>;
}

export default App;
