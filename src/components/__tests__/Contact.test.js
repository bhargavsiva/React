import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  beforeAll(() => {});
  beforeEach(() => {});
  afterAll(() => {});
  afterEach(() => {});
  test("Should Load ContactUs Component", () => {
    render(<Contact />);

    // find all the heading components inside that and give it here
    // screen is rendered on render.
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Should Load Button inside Contact Component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Should Load Submit word inside it", () => {
    render(<Contact />);
    const text = screen.getByText("Submit");

    expect(text).toBeInTheDocument();
  });

  it("Should Load Input Name Inside it", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");

    //Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside Contact Component", () => {
    render(<Contact />);
    const result = screen.getAllByRole("textbox");

    expect(result.length).toBe(2);
  });
});
