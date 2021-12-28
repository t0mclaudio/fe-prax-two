import React, { useState, useEffect } from "react";

export const StudentContext = React.createContext({});

function AppContext(props) {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const results = await fetch(
        `${process.env.REACT_APP_API_URL}?results=100`
      );
      const data = await results.json();
      setStudents(data.results);
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
