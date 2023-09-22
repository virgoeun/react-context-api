import UserContext from "../contexts/user.context";
import { useContext } from "react";

export const User = () => {
  // const handleOnChange = (e) => {
  //   setUsername(e.target.value);
  // };

  const { usernameState, ageState } = useContext(UserContext);
  const [username, setUsername] = usernameState;
  const [age, setAge] = ageState;

  const handleOnChange = (e) => {
    setAge(e.target.value);
  };

  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };


  return (
    <div>
      <h2> User Page </h2>
      <>
        <label> change username : </label>
        <input type="text" onChange={handleNameChange} />
        <p> Current username is : {username} </p>
        <p> Selected age is : {age} </p>
      </>
      <>
      <select onChange={handleOnChange}>
         <option value="the e.target.value thingy"> select age </option>
         {[...Array(200).keys()].slice(18).map((e) => (
           <option key={e} value={e}>
             {e}
           </option>
         ))}
       </select>

      </>
    </div>
  );
};
