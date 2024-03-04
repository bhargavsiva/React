import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props); // Needed why??
    // console.log(this.props.name + " C const");

    this.state = {
      userInfo: {
        name: "Not Me!!",
        location: "Not Here!!",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + " C mount");

    const data = await fetch("https://api.github.com/users/bhargavsiva");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(json);
  }

  //   componentDidUpdate() {
  //     // console.log(this.props.name + " C update");
  //   }

  //   componentWillUnmount() {
  //     // console.log(this.props.name + " C unmount");
  //   }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    // console.log(this.props.name + " C rend");
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <img src={avatar_url} />
        <h4>Contact : bhargavsiva1608@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;

/****
 *
 * ---MOUNTING
 *
 * Constructor(dummy)
 * Render(dummy)
 *      <HTML dummy>
 * Component Did Mount
 *      <API call>
 *      <this.setState> state variable updated
 *
 * ---UPDATE
 *
 * Render(Api data)
 *      <HTML (new data)
 * ComponentDidUpdate
 *
 *
 * ---UNMOUNTING
 *
 * componentWillUnmount()
 */
