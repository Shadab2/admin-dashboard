import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/Topbar/TopBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserList from "./Pages/UserList";
import User from "./Pages/User";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
