import './operator.container.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import { Row, Col } from 'reactstrap';
import { NavbarOperator } from 'app/modules/operator/navbar-operator/navbar-operator';

export interface IOperatorContainerProps extends StateProps, DispatchProps {}

export class OperatorContainer extends React.Component<IOperatorContainerProps> {
  render() {
    return (
      <Row className="operator-container">
        <NavbarOperator />
      </Row>
    );
  }
}

const mapStateToProps = storeState => ({
  account: storeState.authentication.account,
  isAuthenticated: storeState.authentication.isAuthenticated
});

const mapDispatchToProps = { getSession };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(OperatorContainer);
