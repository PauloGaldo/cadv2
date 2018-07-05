import * as React from 'react';
import { Switch } from 'react-router-dom';

import LoginContainer from 'app/modules/login/login.container';
import Logout from 'app/modules/login/logout';
import Home from 'app/modules/home/home';
import PrivateRoute from 'app/shared/auth/private-route';
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import { AUTHORITIES } from 'app/config/constants';
import { OperatorContainer } from 'app/modules/operator/operator.container';

const Routes = () => (
  <div className="view-routes">
    <Switch>
      <ErrorBoundaryRoute path="/login" component={LoginContainer} />
      <ErrorBoundaryRoute path="/home" component={OperatorContainer} />
      <ErrorBoundaryRoute path="/logout" component={Logout} />
      {/* <PrivateRoute path="/account" component={Account} hasAnyAuthorities={[AUTHORITIES.ADMIN, AUTHORITIES.USER]} /> */}
      <ErrorBoundaryRoute path="/" component={Home} />
    </Switch>
  </div>
);

export default Routes;
