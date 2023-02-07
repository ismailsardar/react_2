import './App.css';
import Card from './components/Card';

function App() {
  // Props and destructuring

  return (
    <>
      <h1 className='heading'>To-Do App</h1>
      <Card cardTitle="What is React?" />
      <Card cardTitle="What is mongoDb?" />
      <Card cardTitle="What is Node.js?" />
    </>
    
  );
}

export default App;
