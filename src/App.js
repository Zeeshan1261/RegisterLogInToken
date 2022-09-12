import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import DashBoard from "./DashBoard";
import { useState } from "react";
import ProtectedRoutes from "./ProtectedRoutes";
function App() {
  const [Users, setUsers] = useState([
    {
      Id: "zeeshan",
      password: "12345",
    },
    {
      Id: "Khan",
      password: "6789",
    },
    {
      Id: "Ali",
      password: "98765",
    },
  ]);
  console.log(Users);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login Users={Users} />} />
          <Route
            path="/signup"
            element={<SignUp Users={Users} setUsers={setUsers} />}
          />
          <Route
            path="/dashboard"
            element={<ProtectedRoutes DashBoard={DashBoard} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
