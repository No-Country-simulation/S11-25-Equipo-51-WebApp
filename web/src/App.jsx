<<<<<<< Updated upstream
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
=======
import './index.css'
import BenefitsSection from './components/Beneficios/BenefitsSection'
import Testimonials from './components/Testimonios/Testimonials'
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <BenefitsSection />
      <Testimonials />
      <CallToAction />
      <Footer />
>>>>>>> Stashed changes
    </>
  )
}

export default App
