
import { useState } from 'react';
import './App.css';
import MyComponent from './components/MyComponent';
import IncreaseCount from './components/IncreaseCount';


function App() {
  const [count, setCount] = useState(10);
  

  return (
    <>
      <MyComponent />

      <p>{count}</p>

      <IncreaseCount setCount={setCount}/>

    </>
  )
}

export default App;
