


const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child"}, [
        React.createElement("h1",{},"H1 tag"),
        React.createElement("h2",{},"H2 tag")
    ]),
    React.createElement("div", {id:"child2"}, [
        React.createElement("h1",{},"H1 tag"),
        React.createElement("h2",{},"H2 tag")
    ])
]);

// try writing style inside the object and other objects etc.
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Namaste Everyone"
// );
// const element = React.createElement("h1", {
//     id : " First tag"
// }, "Namaste");

const root = ReactDOM.createRoot(
  document.getElementById("root")
); /*we are editing DOM, for editing we will use DOM*/
// basically we are injecting React only into root, not other divs

// passing a react element inside the root
// root.render(heading);
root.render(parent);

// console.log(heading);


