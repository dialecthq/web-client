/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import "../App.less";
import LanguageContainer from "../utils/state/languageContainer";
import UserContainer from "../utils/state/userContainer";
import Loading from "../components/common/Loading";
import fire from "../utils/fire";
import strings from "../utils/data/strings";
import { useRouter } from "next/router";
import Script from "next/script";
import * as snippet from "@segment/snippet";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <LanguageContainer.Provider>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
      </LanguageContainer.Provider>
    </SessionProvider>
  );
}

function Auth({ children }) {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;
  React.useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!isUser) signIn(); // If not authenticated, force log in
  }, [isUser, status]);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}
