import SideBar from "./components/SideBar"
import Dashboard from "./components/Dashboard"
import MyPetsDashboard from "./components/MyPetsDashboard"
import UpcomingEvents from "./components/UpcomingEvents"
import QuickActions from "./components/QuickActions"

function App() {


  return (

    <div className="flex min-h-screen bg-gray-50">
      <SideBar />
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-20 md:mt-0">
        <div className="md:col-span-2">
          <Dashboard />
        </div>
        <div className="col-span-2 min-[1024px]:col-span-1">
          <MyPetsDashboard />
        </div>
        <div className="col-span-2 min-[1024px]:col-span-1">
          <UpcomingEvents />
        </div>
        <div className="col-span-2 min-[1024px]:col-span-1">
          <QuickActions />
        </div>
      </div>
    </div>

  )
}

export default App
