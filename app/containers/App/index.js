/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Login from '../Login/LoadableLogin';
import Home from '../Home/LoadableHome';
import ErrorPage from '../../res/components/ErrorPage';

import GlobalStyle from '../../global-styles';
import { normalTheme } from '../../themes/normalTheme';

export default function App() {
  return (
    <ThemeProvider theme={normalTheme}>
      <>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route path="" render={() => <ErrorPage code="404" />} />
        </Switch>
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
