import Loading from "../components/common/Loading";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import UserContainer from "../utils/state/userContainer";
import fire from "../utils/fire";

const Logout = () => {
  const router = useRouter();
  const { user, setUser } = UserContainer.useContainer();
  useEffect(async () => {
    fire.auth().signOut();
    setUser(null);
    router.push("/");
  });
  return <Loading />;
};

export default Logout;
