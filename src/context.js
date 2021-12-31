import React, { useState, useEffect } from "react";
import { getStudents } from "./api";

export const StudentContext = React.createContext({});

function AppContext(props) {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { results } = await getStudents();
      setStudents(results);
    };
    fetchData();
  }, []);

  const getStudent = (id) => {
    return students.find((student) => student.login.uuid === id);
  };
  return (
    <StudentContext.Provider value={{ students, getStudent }}>
      {props.children}
    </StudentContext.Provider>
  );
}

export default AppContext;
