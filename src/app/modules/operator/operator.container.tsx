import './operator.container.scss';

import * as React from 'react';
import { Row, Col } from 'reactstrap';
import { NavbarOperator } from 'app/modules/operator/navbar-operator/navbar-operator';
import OperatorLayout from 'app/modules/operator/operator-layout/operator-layout';

// export interface IOperatorContainerProps extends StateProps, DispatchProps { }
const layout = [{ i: 'a', x: 0, y: 0, w: 1, h: 2, static: false }];

export class OperatorContainer extends React.Component {
  render() {
    return (
      // <Col lg="12" className="operator-container">
      //   <Row>
      //     <NavbarOperator />
      //   </Row>

      // </Col>
      <OperatorLayout showModal />
    );
  }
}

export default OperatorContainer;
