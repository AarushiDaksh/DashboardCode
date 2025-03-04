import Sidebar from "./components/SideBar";
import Dashboard from "./components/DashBoard";

function App() {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
