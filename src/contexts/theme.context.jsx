
import { createContext, useState } from "react";

const ThemeContext = createContext(null);
export default ThemeContext;


//
export const ThemeContextProvider = (props) => {
 const [theme, setTheme] = useState("default");
 //

 //
 const multipleValues = {
   themeState: [theme, setTheme]
 };
 //
 //
 return (
   <ThemeContext.Provider value={multipleValues}> 
   {/* making the multipleValues object available to any child components nested within the ThemeContextProvider */}
     {props.children}
   </ThemeContext.Provider>
 );
};
