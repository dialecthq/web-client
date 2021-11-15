import Loading from "../components/common/Loading";
import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const Loader = () => {
  const router = useRouter();

  return (
    <>
      <Loading />
    </>
  );
};

export default Loader;
