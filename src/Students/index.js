import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StudentContext } from "../context";

import styles from "./styles.module.scss";

function Students() {
  const { students } = useContext(StudentContext);
  return (
    <section id="students" className={styles.studentsSection}>
      {students.map((student, idx) => (
        <Link
          to={`/fe-prax-two/${student.login.uuid}`}
          key={`${student.login.uuid}`}
        >
          <figure style={{ animationDelay: `${100 * (idx + 1)}ms` }}>
            <img src={student.picture.large} alt={student.name.first} />
            <figcaption>
              <div>
                {student.name.first} {student.name.last}
              </div>
            </figcaption>
          </figure>
        </Link>
      ))}
    </section>
  );
}

export default Students;
