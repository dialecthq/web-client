// HOC/withAuth.jsx
import { useRouter } from "next/router";
import UserContainer from "../state/userContainer";
const withAuth = (WrappedComponent) => {
  const { user } = UserContainer.useContainer();
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      // If there is no access token we redirect to "/" page.
      if (!user) {
        Router.replace("/");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
