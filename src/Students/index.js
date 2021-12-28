import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context";

function Students() {
  const { students } = useContext(StudentContext);
  return (
    <div>
      {students.map((student) => (
        <Link to={`/${student.login.uuid}`} key={`${student.login.uuid}`}>
          <figure>
            <img src={student.picture.large} alt={student.name.first} />
            <figcaption>
              {student.name.first} {student.name.last}
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
}

export default Students;
