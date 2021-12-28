import { Routes, Route } from "react-router-dom";
import Students from "./Students";
import Student from "./Student";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/fe-prax-two" element={<Students />} />
      <Route path="/fe-prax-two/:id" element={<Student />} />
    </Routes>
  );
};

export default AppRoutes;
