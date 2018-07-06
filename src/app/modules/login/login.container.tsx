import './login.container.scss';
// import '../../../../node_modules/react-toggle-switch/dist/css/switch.min.css';

import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { Row, Col, Button } from 'reactstrap';
import { login } from 'app/shared/reducers/authentication';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Switch from 'react-toggle-switch';
import { IRootState } from 'app/shared/reducers';

export interface ILoginContainerProps extends StateProps, DispatchProps, RouteComponentProps<{}> {}

export interface ILoginContainerState {
  showModal: boolean;
}

export class LoginContainer extends React.Component<ILoginContainerProps, ILoginContainerState> {
  state: ILoginContainerState = {
    showModal: this.props.showModal
  };

  componentDidUpdate(prevProps: ILoginContainerProps) {
    if (this.props !== prevProps) {
      this.setState({ showModal: this.props.showModal });
    }
  }

  handleLogin = (username, password, extension) => {
    this.props.login(username, password, extension);
  };

  handleValidSubmit = (event, values) => {
    // this.props.handleLogin(values.username, values.password, value.extension);
    event.preventDefault();
  };

  handleClose = () => {
    this.setState({ showModal: false });
  };

  handleChange = name => event => {
    // this.setState({ [name]: event.target.checked });
  };

  constructor(props) {
    super(props);
    // this.state = {
    //   switched: false
    // };
  }

  toggleSwitch = () => {
    // this.setState(prevState => {
    //   return {
    //     switched: !prevState.switched
    //   };
    // });
  };

  render() {
    const { location, isAuthenticated } = this.props;
    const { from } = location.state || { from: { pathname: '/', search: location.search } };

    if (isAuthenticated) {
      return <Redirect to={from} />;
    }
    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h1 id="login-title">Inicio de Sesión</h1>
          </Col>
        </Row>

        <center>
          <img src="static/images/logo-gto.png" alt="Logo" align="middle" height="160" width="200" />
        </center>

        <br />
        <Row className="justify-content-center">
          <Col md="8">
            <AvForm id="login-form" onValidSubmit={this.handleValidSubmit}>
              <div className="input-field">
                <i className="material-icons prefix">personblack24px</i>
                <input
                  id="extension"
                  type="text"
                  onInvalid={this.handleValidSubmit}
                  validate={{ required: { value: true, errorMessage: 'Ingrese el usuario.' } }}
                />
                <label for="username">Usuario</label>
              </div>
              <br />
              <label for="perfil">Perfil:</label>
              <div className="input-field">
                <i className="material-icons prefix">visibility24px</i>
                <div>
                  <select
                    id="profilSelect"
                    className="form-control"
                    validate={{ required: { value: true, errorMessage: 'Seleccione el perfil.' } }}
                  >
                    <option value="Seleccione el Perfil" />
                    <option value={10}>Administrador</option>
                    <option value={20}>Perfil 1</option>
                    <option value={30}>Perfil 2</option>
                  </select>
                </div>
              </div>
              <br />
              <label for="validacion">Validación:</label>
              <div>
                <Switch
                  onClick={this.toggleSwitch}
                  on={this.state.switched}
                  color="blue"
                  size="large"
                  icons={{
                    checked: <i className="material-icons prefix">phonewhite24px</i>,
                    unchecked: null
                  }}
                />
              </div>
              <br />
              <div className="input-field">
                <i className="material-icons prefix">phoneblack24px</i>
                <input
                  id="extension"
                  type="number"
                  required
                  validate={{ required: { value: true, errorMessage: 'Ingrese el número de extensión.' } }}
                />
                <label for="username">Numero de extensión</label>
              </div>
              <br />
              <Button id="login" type="submit" href="#/home?username" href="#/home" replace color="info">
                <span className="d-none d-md-inline">Ingresar </span>
                <FontAwesomeIcon icon="arrow-right" />
              </Button>&nbsp;
            </AvForm>
          </Col>
        </Row>
      </div>
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
