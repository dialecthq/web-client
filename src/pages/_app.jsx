/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import App from "next/app";
import "../App.less";
import LanguageContainer from "../utils/state/languageContainer";
import UserContainer from "../utils/state/userContainer";
import Loading from "../components/common/Loading";
import fire from "../utils/fire";
import strings from "../utils/data/strings";
import { useRouter } from "next/router";
import Script from "next/script";
import * as snippet from "@segment/snippet";

function Wrapper({ Component, pageProps }) {
  const { user, loading } = UserContainer.useContainer();
  const { language } = LanguageContainer.useContainer();
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", (url) => {
      if (typeof window !== undefined) {
        window.analytics.page(url);
      }
    });

    return () => {
      router.events.on("routeChangeComplete", (url) => {
        if (typeof window !== undefined) {
          window.analytics.page(url);
        }
      });
    };
  }, []);

  useEffect(() => {
    strings.setLanguage(language);
  }, [language]);

  useEffect(() => {
    if (user) {
      const { unfinished } = user;
      if (unfinished) {
        router.replace(`/rate?id=${unfinished}`);
      }
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <LanguageContainer.Provider>
      <UserContainer.Provider>
        <Wrapper Component={Component} pageProps={pageProps} />
      </UserContainer.Provider>
    </LanguageContainer.Provider>
  );
}

export default MyApp;
