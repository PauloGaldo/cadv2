import './collapsable.scss';
import * as React from 'react';
import M from 'materialize-css';

export interface ICollapsableProps {
  title: string;
  id: string;
}

export class Collapsable extends React.Component<ICollapsableProps> {
  componentDidMount() {
    const elements = document.querySelectorAll(`#${this.props.id}`);
    // const instance = M.Collapsible.getInstance(elements[0]);
    // console.log(instance);
  }

  render() {
    return (
      <ul className="collapsible" id={this.props.id}>
        <li>
          <div className="collapsible-header">
            <div className="col s8">{this.props.title}</div>
            <i className="material-icons handle">open_with</i>
          </div>
          <div className="collapsible-body">{this.props.children}</div>
        </li>
      </ul>
    );
  }
}

export default Collapsable;
