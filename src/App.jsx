import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0); 

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=AlnHNi0hdO0" target="_blank">
          <img src="src/assets/miguelOhara.jfif" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src="src/assets/milesMorales.jfif" className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Evento Canônico</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Quantidade de eventos canônicos: {count}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      
      <div className="card">
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          Quantidade de eventos canônicos: {count2}
        </button>
        {/* <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p> */}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
