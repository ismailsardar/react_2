import './App.css';
import UnderActivite from './components/UnderActivite';
// import Card from './components/Card';
// import NestedMap from './components/NestedMap';

function App() {
  // Props and destructuring

  return (
    <>
      <h1 className='heading'>To-Do App</h1>
      {/* <Card cardTitle="What is React?" />
      <Card cardTitle="What is mongoDb?" />
      <Card cardTitle="What is Node.js?" /> */}
      {/* <NestedMap /> */}
      <UnderActivite />
    </>
    
  );
}

export default App;
