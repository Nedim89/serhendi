import './App.css';
import { ParentComponent } from './components/ParentComponent';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <ParentComponent />
      <Welcome />
    </div>
  );
}

export default App;
