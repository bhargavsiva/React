import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = React.createElement("h1", {id:"heading"}, "React fundamentals");

// JSX - HTML-like or XML-like syntax
// transpiled before it reaches JS Engine - Done by Parcel

// React element
const jsxHeading = (
  <h1 id="heading" className="head">
    Heading using JSX
  </h1>
);

// console.log(heading);
// console.log(jsxHeading);

// React Functional Component
const HeadingComponent = () => {
  return <h1>React Functional Component</h1>;
};

// const HeadingComponent2 = () => <h1>React Functional Component</h1>; ---> perfectly good.
// no need return statement since it has only single statement, no return statement is required. ----> digest this syntax.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
root.render(<HeadingComponent />);
