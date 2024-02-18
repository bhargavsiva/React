import React from "react";
import ReactDOM from "react-dom/client";

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     React JSX
//   </h1>
// );

const title = (
  <h1 className="head" tabIndex="5">
    React JSX
  </h1>
);

// Component composition - referencing a component inside another
// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h1 className="heading">Namaste React Func Component</h1>
//   </div>
// );

const number = 10000;

// We can write JS code inside curly braces in the JSX code
const HeadingComponent = () => (
  <div id="container">
    <h2>{100 + 200}</h2>
    <h2>{title}</h2>
    <h1 className="heading">Namaste React Func Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
