import './operator.container.scss';

import * as React from 'react';
import { connect } from 'react-redux';
import { getSession } from 'app/shared/reducers/authentication';
import { Row, Col } from 'reactstrap';
import { NavbarOperator } from 'app/modules/operator/navbar-operator/navbar-operator';
import { ResizeCollapsable } from 'app/shared/resize-collapsable/resize-collapsable';

export interface IOperatorContainerProps extends StateProps, DispatchProps {}

export class OperatorContainer extends React.Component<IOperatorContainerProps> {
  render() {
    return (
      <Col lg="12" className="operator-container">
        <Row>
          <NavbarOperator />
        </Row>
        <Row>
          <Col lg="8" className="col">
            <Row>
              <ResizeCollapsable title="Origen de llamada">
                <p>texto</p>
              </ResizeCollapsable>
            </Row>
          </Col>
          <Col lg="4" className="col" />
        </Row>
      </Col>
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
