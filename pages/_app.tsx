/* eslint-disable react/jsx-props-no-spreading */
import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0';
import {
  MuiThemeProvider,
  responsiveFontSizes,
  ThemeProvider
} from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import SygefexTheme from './components/utils/SygefexTheme';
import './layout/index.css';
import { useApollo } from './lib/apolloClient';
import Page from './Page';

const MyApp = (props: any): React.ReactElement<AppProps> => {
  const {
    Component,
    pageProps: { session, ...pageProps }
  } = props;
  const responsiveTheme = responsiveFontSizes(SygefexTheme);
  const apolloClient = useApollo(pageProps);
  const { user } = pageProps;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  console.log({ apolloClient });
  return (
    <MuiThemeProvider theme={responsiveTheme}>
      <ThemeProvider theme={responsiveTheme}>
        <UserProvider user={user}>
          <ApolloProvider client={apolloClient}>
            <Page>
              <Component {...pageProps} />
            </Page>
          </ApolloProvider>
        </UserProvider>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default MyApp;
