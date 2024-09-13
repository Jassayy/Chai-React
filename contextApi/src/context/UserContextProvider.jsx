import React, { useState } from "react";
import UserContext from "./usercontext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null, { children });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
