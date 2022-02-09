import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/Topbar/TopBar";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
