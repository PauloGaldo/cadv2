import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppContainer } from 'react-hot-loader';

import DevTools from './config/devtools';
import initStore from './config/store';
import setupAxiosInterceptors from './config/axios-interceptor';
import { clearAuthentication } from './shared/reducers/authentication';
import ErrorBoundary from './shared/error/error-boundary';
import AppComponent from './app';
import { loadIcons } from './config/icon-loader';
// tslint:disable-next-line:no-submodule-imports
import 'materialize-css/dist/css/materialize.css';
// tslint:disable-next-line:no-submodule-imports
import 'materialize-css/dist/js/materialize.js';
import 'typeface-roboto';
// tslint:disable-next-line:no-submodule-imports
import 'react-grid-layout/css/styles.css';
// tslint:disable-next-line:no-submodule-imports
import 'react-resizable/css/styles.css';

const devTools = process.env.NODE_ENV === 'development' ? <DevTools /> : null;

const store = initStore();

const actions = bindActionCreators({ clearAuthentication }, store.dispatch);
setupAxiosInterceptors(() => actions.clearAuthentication('login.error.unauthorized'));

loadIcons();

const rootEl = document.getElementById('root');

const render = Component =>
  ReactDOM.render(
    <ErrorBoundary>
      <AppContainer>
        <Provider store={store}>
          <div>
            {/* If this slows down the app in dev disable it and enable when required  */}
            {devTools}
            <Component />
          </div>
        </Provider>
      </AppContainer>
    </ErrorBoundary>,
    rootEl
  );

render(AppComponent);

// This is quite unstable
// if (module.hot) {
//   module.hot.accept('./app', () => {
//     const NextApp = require<{ default: typeof AppComponent }>('./app').default;
//     render(NextApp);
//   });
// }
