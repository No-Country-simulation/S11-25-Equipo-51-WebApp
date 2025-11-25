import SideBar from "./components/SideBar"
import Dashboard from "./components/Dashboard"
import MyPetsDashboard from "./components/MyPetsDashboard"

function App() {


  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <Dashboard />
      <MyPetsDashboard />
    </div>

  )
}

export default App
