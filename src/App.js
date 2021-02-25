import { useState } from 'react';
import './App.css';

function App() {
  const appStyle = {
    display:'flex'
  } 
  return (
    <div className="App">
      <header className="App-header">
      <MovieCount></MovieCount>
      <div style = {appStyle}>
        <Hero name="X" universe="Marvel"></Hero>
        <Hero name="Spider" universe="Marvel"></Hero>
        <Hero name="Bat" universe="DC"></Hero>
        <Hero name="Super" universe="DC"></Hero>
      </div>
      
      </header>
    </div>
  );
}

function Hero(props) {
  const heroStyle = {
    border:'2px solid cyan',
    width:'24vw',
    margin:'5px'
  }
  return(
    <div style={heroStyle}>
      <h1>{props.name} Man</h1>
      <p>I am from {props.universe} Comics</p>
    </div>
  )
}

function MovieCount(){
  const [count, setCount] = useState(0)
  return(
    <div>
      <button onClick={()=>setCount(count+1)}>Add Movie</button>
      <h3>Number of Movies: {count}</h3>
    </div>
  )
}

export default App;
