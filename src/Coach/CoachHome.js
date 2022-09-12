import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import CoachNav from "./CoachNav";
import CoachDetail from "./CoachDetail";

const CoachHome = () => {
  return (
    <>
      <CoachNav />
      <Routes>
        <Route path="/:topics" element={<CoachDetail />} />
      </Routes>
    </>
  );
};

export default CoachHome;
