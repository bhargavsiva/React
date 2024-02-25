import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { loggedInUser } = useContext(UserContext);
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    setUserName("Now Changed");
  });
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <h1>Contact Us</h1>
      </div>
    </UserContext.Provider>
  );
};

export default Contact;
