import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { StudentContext } from "../context";
import Student from ".";

const StudentsWithmockedContext = () => {
  return (
    <StudentContext.Provider
      value={{
        getStudent: () => ({
          name: { first: "Tom Claudio" },
          login: { uuid: "123" },
          picture: { large: "#" },
        }),
      }}
    >
      <MemoryRouter>
        <Student />
      </MemoryRouter>
    </StudentContext.Provider>
  );
};

describe("Student page", () => {
  it("renders without crashing", () => {
    render(<StudentsWithmockedContext />);
    expect(screen.getByText("Tom Claudio")).toBeInTheDocument();
  });
});
