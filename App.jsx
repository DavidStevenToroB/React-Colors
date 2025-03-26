import { useState } from 'react'
import { Header } from './src/Layouts/Header/Header'
import './App.css'

export function App() {
  const [count, likeCount] = useState(0)
  const [dontcount, dontlikeCount] = useState(0)
  const [darkMood, setDarkMood] = useState(false)

  const toggleDarkMood = () => {
    setDarkMood(!darkMood)
  }

  const Mood = darkMood ? 'dark' : 'clear'


  return (
    <body className={Mood} >
      <Header />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => likeCount((count) => count + 1)}>
          👍 {count}
        </button>
        <button onClick={() => dontlikeCount((dontcount) => dontcount - 1)}>
          👎 {dontcount}
        </button>
          <button className='mood' onClick={toggleDarkMood}>
            {darkMood ? 'Modo Claro' : 'Modo Oscuro'}
          </button>
      </div>
    </body>
  )
}
