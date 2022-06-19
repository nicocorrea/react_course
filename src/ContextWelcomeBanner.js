import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function WelcomeBanner() {
  const { user } = useContext(UserContext);
  return <h1>Hello {user.name}</h1>;
}
