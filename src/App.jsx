import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="30"></Device>
      <Device name="watch" price="20"></Device>
      <Device></Device>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student grade=""></Student>
      <Student></Student>
      <Student></Student>
      <Dev></Dev>
    </>
  )
}

function Person() {
  const age = 25;
  const money = 50;
  const person = { name: 'Bristy', age: 12 }
  return <h3>I m a {person.name}{age + money}</h3>;  // JSX is valid here too!
}
const { grade, score } = { grade: '7', score: '99' };
//component
function Student(props) {
  console.log(props);
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Name:</p>
      <p>Age: </p>
    </div>  // JSX is valid here too!
  )
}
function Device(props) {
  return <h2>This device: {props.name} {props.price}</h2>
}

function Dev() {
  const devStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    //apply style dynamically
    <div style={devStyle}>
      <h3>Dev</h3>
      <p>coding</p>
    </div>  // JSX is valid here too!
  )
}

export default App
