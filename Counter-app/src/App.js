
import React,{useState} from 'react';
import { store } from './Redux/store';
import {handleIncrement,handleDecrement} from './Redux/action';
import "./App.css"
function App() {
  const {dispatch}=store;
  const {counter}=store.getState();
  const [local,setLocal]=useState(0)
  //It will run the callback function ,whenever the state inside the Redux store changes
  store.subscribe(()=>{
    setLocal((prev)=> prev+1);
  });

  return (
    
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={()=>dispatch(handleIncrement())}>INCREMENT</button>
      <button onClick={()=>dispatch(handleDecrement())}>DECREMENT</button>

    </div>
  );
}

export default App;
