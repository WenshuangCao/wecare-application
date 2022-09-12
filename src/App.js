import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import CoachSignUp from "./Coach/CoachSignUp";
import CoachLogin from "./Coach/CoachLogin";
import UserLogin from "./User/UserLogin";
import UserSignUp from "./User/UserSignUp";
import CoachHome from "./Coach/CoachHome";
import UserHome from "./User/UserHome";
import CoachDetail from "./Coach/CoachDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}>
          Home
        </Route>
        <Route index="/home" element={<Home />}>
          Home
        </Route>
        <Route path="/coachsignup" element={<CoachSignUp />} />
        <Route path="/coachlogin" element={<CoachLogin />} />
        <Route path="/usersignup" element={<UserSignUp />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/coach/*" element={<CoachHome />} />
        <Route path="/user/*" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
