import './resize-collapsible.scss';

import * as React from 'react';

export interface IResizeCollapsableProps {
  title: string;
}

export class ResizeCollapsable extends React.Component<IResizeCollapsableProps> {
  render() {
    return (
      <ul className="mwlResizable collapsible">
        <li>
          <div className="collapsible-header">
            <div className="col s8">{this.props.title}</div>
            <i className="material-icons handle">open_with</i>
          </div>
          <div className="collapsible-body">
            {this.props.children}
            <img src="http://i.imgur.com/eqzz2dl.gif" className="resize-handle" />
          </div>
        </li>
      </ul>
    );
  }
}

export default ResizeCollapsable;
