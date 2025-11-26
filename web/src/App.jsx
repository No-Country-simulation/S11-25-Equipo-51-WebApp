import './index.css'
import BenefitsSection from './components/Beneficios/BenefitsSection'
import Testimonials from './components/Testimonios/Testimonials'
import CallToAction from './components/CallToAction/CallToAction'
import Footer from './components/Footer/Footer'
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <>
     <Dashboard />
      <BenefitsSection />
      <Testimonials />
      <CallToAction />
      <Footer />

    </>
  )
}

export default App
