import React from 'react';
import { createContext, useState, useContext } from 'react';

export const AppContext = createContext();

export default function UserContext({children}) {

   const [value, setValue] = useState('react-basics');
  

  function setval (val) {
    setValue(()=>val);
  }


  return (
<AppContext.Provider value={{value,setval}}>
{children}
</AppContext.Provider>
  );
}
