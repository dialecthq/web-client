import Loading from "../components/common/Loading";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import UserContainer from "../utils/state/userContainer";

const Logout = () => {
  const router = useRouter();
  const { user, setUser } = UserContainer.useContainer();
  useEffect(async () => {
    await axios.post("/api/user/logout");
    setUser(null);
    router.push("/");
  });
  return <Loading />;
};

export default Logout;
