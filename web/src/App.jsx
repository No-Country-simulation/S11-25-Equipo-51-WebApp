import SideBar from "./components/SideBar"
import Dashboard from "./components/Dashboard"
import MyPetsDashboard from "./components/MyPetsDashboard"
import UpcomingEvents from "./components/UpcomingEvents"

function App() {


  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <Dashboard />
      <MyPetsDashboard />
      <UpcomingEvents />
    </div>

  )
}

export default App
