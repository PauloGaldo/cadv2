import * as React from 'react';
import { NavbarOperator } from 'app/modules/operator/navbar-operator/navbar-operator';
import { ResizeCollapsable } from 'app/shared/resize-collapsable/resize-collapsable';
import { GridLayout } from 'react-grid-layout';

export interface IOperatorLayoutState {
  showModal: boolean;
}

export class OperatorLayout extends React.Component<IOperatorLayoutState> {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
      { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    ];
    return (
      <div>
        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key="a">a</div>
          <div key="b">b</div>
          <div key="c">c</div>
        </GridLayout>
      </div>
    );
  }
}

export default OperatorLayout;
