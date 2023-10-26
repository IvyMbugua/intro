const Counter = ({count, handleDecrement, handleIncrement}) => {

    return (
        <>
          <h1>Welcome to my Count App</h1>
          <h2>{count}</h2>
          {
            count > 10 ? <h2>You are kinda famous</h2> : <h2>Go get likes</h2>
          }
    
          <button onClick={handleIncrement}> + </button>
          <button onClick={handleDecrement}> - </button>
    
        </>
      );
}

export default Counter;