import './operator-layout.scss';

import * as React from 'react';
import { Responsive as ResponsiveGridLayout, Layout, LayoutItem } from 'react-grid-layout';
import { Collapsable } from 'app/shared/collapsable/collapsable';

export interface IOperatorLayoutState {
  resizable: boolean;
}

export class OperatorLayout extends React.Component<IOperatorLayoutState> {
  static defaultProps = {
    className: 'layout',
    margin: [0, 0],
    rowHeight: 1,
    width: window.innerWidth,
    breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
    cols: { lg: 30, md: 30, sm: 30, xs: 30, xxs: 30 },
    draggableHandle: '.handle'
  };

  onResizeStart(layout: Layout, oldItem: LayoutItem, newItem: LayoutItem, placeholder: LayoutItem, e: MouseEvent, element: HTMLElement) {
    console.log(layout);
    console.log(newItem);
  }

  render() {
    const layout = [
      { i: 'origen_llamada', x: 0, y: 1, w: 10, h: 35 },
      { i: 'direccion_incidente', x: 0, y: 2, w: 10, h: 35 },
      { i: 'descripcion_incidente', x: 0, y: 3, w: 10, h: 35 },
      { i: 'tipo_incidente', x: 10, y: 1, w: 10, h: 35 },
      { i: 'corporaciones', x: 10, y: 2, w: 10, h: 35 },
      { i: 'notas_incidente', x: 10, y: 3, w: 10, h: 35 }
    ];
    return (
      <ResponsiveGridLayout {...this.props} className="layout" layouts={{ lg: layout }} onResizeStart={this.onResizeStart}>
        <div key="origen_llamada">
          <Collapsable title="Origen llamada" id="orillam">
            <span>txt</span>
          </Collapsable>
        </div>
        <div key="direccion_incidente">
          <Collapsable title="Direccion incidente" id="dirinc">
            <span>txt</span>
          </Collapsable>
        </div>
        <div key="descripcion_incidente">
          <Collapsable title="Descripcion" id="desinc">
            <span>txt</span>
          </Collapsable>
        </div>
        <div key="tipo_incidente">
          <Collapsable title="Tipo incidente" id="tipinc">
            <span>txt</span>
          </Collapsable>
        </div>
        <div key="corporaciones">
          <Collapsable title="Corporaciones" id="corpinc">
            <span>txt</span>
          </Collapsable>
        </div>
        <div key="notas_incidente">
          <Collapsable title="Notas del incidente" id="notainc">
            <span>txt</span>
          </Collapsable>
        </div>
      </ResponsiveGridLayout>
    );
  }
}

export default OperatorLayout;
