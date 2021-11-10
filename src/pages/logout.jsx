import Loading from "../components/common/Loading";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import fire from "../utils/fire";
import { signOut } from "next-auth/react";

const Logout = () => {
  const router = useRouter();
  useEffect(async () => {
    signOut();
    router.push("/");
  });
  return <Loading />;
};

export default Logout;
