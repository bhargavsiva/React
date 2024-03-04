import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("P const");
  }

  componentDidMount() {
    // console.log("P mount");
  }

  render() {
    // console.log("P rend");
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Page</h2>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <UserClass name={"Child2"} location={"Child2 Arizona"} />
      </div>
    );
  }
}

export default About;
