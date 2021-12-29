import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { StudentContext } from "../context";
import Students from ".";

const StudentsWithmockedContext = () => {
  return (
    <StudentContext.Provider
      value={{
        students: [
          {
            name: { first: "Tom Claudio" },
            login: { uuid: "123" },
            picture: { large: "#" },
          },
        ],
      }}
    >
      <MemoryRouter>
        <Students />
      </MemoryRouter>
    </StudentContext.Provider>
  );
};

describe("Students page", () => {
  it("renders without crashing", () => {
    render(<StudentsWithmockedContext />);
    expect(screen.getByText("Tom Claudio")).toBeInTheDocument();
  });

  test("have the expected href attribute", () => {
    render(<StudentsWithmockedContext />);
    const linkToStudentPage = screen.getByRole("link");
    expect(linkToStudentPage).toHaveAttribute("href", "/123");
  });
});
