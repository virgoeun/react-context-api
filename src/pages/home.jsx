import UserContext from "../contexts/user.context";
import { useContext } from "react";


export const Home = () => {
  const { usernameState, ageState } = useContext(UserContext);
  // const {username} = useContext(UserContext);
  const [username] = usernameState;
  const [age] = ageState;
  // to access the object's value, []
  // const username = usernameState[0] // first value
  // const age = userageState[0]



 

  return (
        <div>
          <h2> Home Page </h2>
          <p> Hello {username} and my age is {age} </p>
        </div>
  );
};
