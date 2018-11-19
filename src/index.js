import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
  primary: red,
  secondary: {
    main: green[500]
  },
  },
});

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <MuiThemeProvider theme={theme}>
      <Switch>

        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}

      </Switch>
    </MuiThemeProvider>
  </Router >,
  document.getElementById("root")
);
