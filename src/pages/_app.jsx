/* eslint-disable react/jsx-props-no-spreading */
import "../App.less";
import LanguageContainer from "../utils/state/languageContainer";
import UserContainer from "../utils/state/userContainer";
import Loading from "../components/common/Loading";
import * as snippet from "@segment/snippet";
import { UserProvider, useUser } from "@auth0/nextjs-auth0";
import { useEffect, useState } from "react";
import { getUser } from "../utils/db";
import axios from "axios";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <LanguageContainer.Provider>
        <UserContainer.Provider>
          <Wrap>
            <Component {...pageProps} />
          </Wrap>
        </UserContainer.Provider>
      </LanguageContainer.Provider>
    </UserProvider>
  );
}

function Wrap({ children }) {
  const { user, isLoading, error } = useUser();
  const { stateUser, setStateUser } = UserContainer.useContainer();
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    if (user && !isLoading && !stateUser) {
      setLoading(true);
      const result = await axios.get(`/api/user/ping?email=${user.email}`);
      setStateUser(result.data);
      setLoading(false);
    } else if (!user && !isLoading && stateUser) {
      setStateUser(null);
    }
  }, [user, isLoading]);

  if (isLoading || loading) {
    return <Loading />;
  }
  return <div>{children}</div>;
}

// function Auth({ children }) {
//   const { data: session, status } = useSession();
//   const isUser = !!session?.user;
//   React.useEffect(() => {
//     if (status === "loading") return; // Do nothing while loading
//     if (!isUser) signIn(); // If not authenticated, force log in
//   }, [isUser, status]);

//   if (isUser) {
//     return children;
//   }

//   // Session is being fetched, or no user.
//   // If no user, useEffect() will redirect.
//   return <div>Loading...</div>;
// }
