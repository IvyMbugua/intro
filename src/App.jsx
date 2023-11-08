//App.jsx
import { useState, useReducer } from "react";
import Counter from "./components/Counter";
import UserList from "./components/UserList";
import { Link } from "react-router-dom";
import DisplayData from "./components/DisplayData";


const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return{count: state.count + 1};
    case "decrement":
      return{count: state.count - 1};
      
    default:
      break;
  }
};


//App component (functional component/ParentComponent)
const App = ()=>{
  const [state, dispatch] = useReducer(countReducer, {count: 0});

  const increment = () => {
    dispatch({type: 'increment'});
  }

  const decrement = () => {
    dispatch({type: 'decrement'});
  }

  return (

    <>
      <h1>Welcome to Home Page</h1>
      <Link to="/about">About Page</Link>
      <Counter
      handleIncrement={increment}
      handleDecrement={decrement}
      count={state.count}
      />

      <DisplayData/>
      <h1>Users</h1>
      <UserList/>
    </>

  );
}

export default App