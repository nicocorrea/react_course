import { createContext, useState } from "react";

export const UserContext = createContext({
  toggleUser: null,
  user: {
    name: null,
    course: null,
  },
});

const conner = {
  name: "Conner",
  course: "FrontendExpert",
};

const clement = {
  name: "Clement",
  course: "AlgoExpert",
};

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(conner);

  const toggleUser = () => {
    if (user === conner) {
      setUser(clement);
    } else {
      setUser(conner);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        toggleUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
