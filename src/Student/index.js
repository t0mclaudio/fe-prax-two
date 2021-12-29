import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudentContext } from "../context";
import styles from "./styles.module.scss";

function Student() {
  const [student, setStudent] = useState(null);
  const { getStudent } = useContext(StudentContext);
  const { id } = useParams();

  useEffect(() => {
    const response = getStudent(id);
    setStudent(response);
  }, [id, getStudent, setStudent]);

  if (student) {
    return (
      <article className={styles.studentWrapper}>
        <figure>
          <img src={student.picture.large} alt={student.name.first} />
          <figcaption>
            {student.name.first} {student.name.last}
          </figcaption>
        </figure>
      </article>
    );
  } else {
    return <div>nothing found</div>;
  }
}

export default Student;
