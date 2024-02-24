import { useState } from "react";

const User = (props) => {
  const { name } = props;
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <h2>Name : {name}</h2>
      <h3>Location : Arizona</h3>
      <h4>Contact : bhargavsiva1608@gmail.com</h4>
    </div>
  );
};

export default User;
