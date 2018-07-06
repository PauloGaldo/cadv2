import './operator.container.scss';

import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { NavbarOperator } from 'app/modules/operator/navbar-operator/navbar-operator';
import OperatorLayout from 'app/modules/operator/operator-layout/operator-layout';

export class OperatorContainer extends React.Component {
  render() {
    return (
      <Col lg="12" className="operator-container">
        <Row>
          <NavbarOperator />
        </Row>
        <OperatorLayout resizable />
      </Col>
    );
  }
}

export default OperatorContainer;
