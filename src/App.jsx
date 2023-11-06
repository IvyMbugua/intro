//App.jsx
import { useState } from "react";
import Counter from "./components/Counter";

//App component (functional component/ParentComponent)
const App = ()=>{

  const [count, setCount] = useState(0)
  
  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  return (

    <>
      {/**Pass the count state variable, handleIncrement and handleDecrement functions as props to the Counter component */}
      <Counter handleIncrement={handleIncrement} handleDecrement={handleDecrement} count={count}/>
    </>

  );
}

export default App