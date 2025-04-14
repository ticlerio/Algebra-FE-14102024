import { UserForm } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserForm />
      <p>GithubUser</p>
      <p>GithubRepos</p>
      <button>Reset</button>
    </div>
  );
}

export default App;
