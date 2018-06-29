import './login.container.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import { IRootState } from 'app/shared/reducers';
import { login } from 'app/shared/reducers/authentication';

export interface ILoginContainerProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export interface ILoginContainerState {
  showModal: boolean;
}

export class LoginContainer extends React.Component<ILoginContainerProps, ILoginContainerState> {
  state: ILoginContainerState = {
    showModal: this.props.showModal
  };

  componentDidUpdate(prevProps: ILoginContainerProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({ showModal: this.props.showModal });
    }
  }

  handleLogin = (username, password, rememberMe = false) => {
    this.props.login(username, password, rememberMe);
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { location, isAuthenticated } = this.props;
    const { from } = location.state || { from: { pathname: '/', search: location.search } };
    const { showModal } = this.state;
    if (isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <Row className="login-container">
        <Col lg="4" className="column-form">
          <span>texto prueba</span>
        </Col>
      </Row>
      // <LoginModal showModal={showModal} handleLogin={this.handleLogin} handleClose={this.handleClose} loginError={this.props.loginError} />
    );
  }
}

const mapStateToProps = ({ authentication }: IRootState) => ({
  isAuthenticated: authentication.isAuthenticated,
  loginError: authentication.loginError,
  showModal: authentication.showModalLogin
});

const mapDispatchToProps = { login };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
