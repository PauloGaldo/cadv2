import * as React from 'react';

import { connect } from 'react-redux';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Row, Col, Alert, Button } from 'reactstrap';

export type ILoginProps = DispatchProps;

export interface ILoginState {
  username: string;
  password: string;
}

export class LoginPage extends React.Component<ILoginProps, ILoginState> {
  state: ILoginState = {
    username: '',
    password: ''
  };

  componentWillUnmount() {
    this.props.reset();
  }

  handleValidSubmit = (event, values) => {
    this.props.handleLogin(values.username, values.password);
    event.preventDefault();
  };

  updatePassword = event => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8" />
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            <AvForm />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = { login };
type DispatchProps = typeof mapDispatchToProps;

export default connect(null, mapDispatchToProps)(LoginContainer);
