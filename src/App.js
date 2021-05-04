import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// MUI imports
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Components & Pages
import Home from './pages/Home';

// Utility
import themeFile from './util/theme';
const theme = createMuiTheme(themeFile);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className='App'>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
          </Router>
        </div>
      </Provider>
    </ThemeProvider>
  );
}
