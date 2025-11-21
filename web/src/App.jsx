import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PetList from './components/pets/PetList.jsx'
import PetForm from './components/pets/PetForm.jsx'

function App() {
  

   return (
    <div className="p-4">
      <PetList />
    </div>
  );
}

export default App
