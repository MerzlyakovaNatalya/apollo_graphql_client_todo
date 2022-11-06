import logo from './logo.svg';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <header>
      </header>
      <main>
      <div className='App'>
        <AddTodo />
        <TodoList />
      </div>
      </main>
      <footer>
        <a
          
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
