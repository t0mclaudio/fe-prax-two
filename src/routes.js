import { Routes, Route } from "react-router-dom";
import Students from "./Students";
import Student from "./Student";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Students />} />
      <Route path="/:id" element={<Student />} />
    </Routes>
  );
};

export default AppRoutes;
