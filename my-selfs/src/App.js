import './App.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Countact from './pages/Countact';
import Error from './pages/Error';
// import ContextApi1 from './components/Context_Api/ContextApi_1';
// import Reduser from './components/UseReducer/Reduser';
// import Dynamic from './components/Dynamic_Styling/Dynamic';
// import Dynamic2 from './components/Dynamic_Styling/Dynamic2';
// import State from './components/UseReducer/State';
// import DataFatch from './components/customHook/DataFatch';
// import Toggle from './components/Toggle';
// import UnderActivite from './components/UnderActivite';
// import Card from './components/Card';
// import NestedMap from './components/NestedMap';

function App() {
  // Props and destructuring

  return (
    <>
      <h1 className='heading'>React Basic</h1>
      {/* <h1 className='heading'>To-Do App</h1> */}
      {/* <Card cardTitle="What is React?" />
      <Card cardTitle="What is mongoDb?" />
      <Card cardTitle="What is Node.js?" /> */}
      {/* <NestedMap /> */}
      {/* <UnderActivite /> */}
      {/* <Toggle /> */}
      {/* <DataFatch /> */}
      {/* <Dynamic /> */}
      {/* <Dynamic2 /> */}
      {/* <State /> */}
      {/* <Reduser /> */}
      {/* context api */}
      {/* <ContextApi1 /> */}

      {/* React Router Dom */}
      <BrowserRouter>

       <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/countact' element={<Countact />} />
        <Route path='*' element={<Error />} />
       </Routes>

      </BrowserRouter>
    </>
    
  );
}

export default App;
