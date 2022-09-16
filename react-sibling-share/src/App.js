import { useRef } from 'react';
import './App.css';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';

function App() {
  const a_cpm = useRef(null)
  return (
    <div className="App">
      <FirstChild ref={a_cpm}/>
      <SecondChild clear={() =>a_cpm.current.clear()}/>
    </div>
  );
}

export default App;
//useRef() returns a mutable ref object whose .current property is initialized to the passed argument
//source=https://reactjs.org/docs/hooks-reference.html#useref