import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";
import strings from "../data/strings";

function useUser() {
  const [stateUser, setStateUser] = useState(null);

  return { stateUser, setStateUser };
}

const UserContainer = createContainer(useUser);

export default UserContainer;
