import { createContext, useState } from "react";

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = (props) => {
  const [username, setUsername] = useState("bob89");
  const [age, setAge] = useState(null);
  const multipleValues = {
    usernameState: [username, setUsername],
    ageState: [age, setAge]
  };
 
  return (
    <UserContext.Provider value={multipleValues}>
      {props.children}
    </UserContext.Provider>
  );
};


//props is the argument passed to the UserContextProvider function.
// props.children represents any content or components that are wrapped 
// by <UserContextProvider> when it is used elsewhere in your application.

//<UserContextProvider>
//<App />
// </UserContextProvider>

//In this usage, <App /> is considered the props.children of the UserContextProvider component.
// The content of <App /> will be rendered within the context provided by UserContext.Provider, 
// and it can access the values like username and setUsername that are defined 
// in the provider's value.

