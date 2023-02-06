import './App.css';

function App() {

  const Card = () => {
    return (
      <div className="App">
      <h1 style={{color:"green", fontSize: "4rem"}} >Wellcom</h1>
    </div>
    )
  }

  return (
    <>
      <Card />
      <Card />
      <Card />
      <Card />
    </>
    
  );
}

export default App;
