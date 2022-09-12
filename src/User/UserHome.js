import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import UserNav from "./UserNav";
import UserDetail from "./UserDetail";

const UserHome = () => {
  return (
    <>
      <UserNav />
      <Routes>
        <Route path="/:topics" element={<UserDetail />} />
      </Routes>
    </>
  );
};

export default UserHome;
