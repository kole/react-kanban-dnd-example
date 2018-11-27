import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './ToggleSwitch.styles';

const Switch = styled.div`
.lbl {
    background: #898989;
    border-radius: 100px;
    cursor: pointer;
    display: block;
    height: 20px;
    position: relative;
    transition: all 0.3s ease;
    width: 44px;
}
.lbl:after {
    background: #fff;
    border-radius: 100px;
    box-shadow: 0px 3px 3px rgba(0,0,0,0.05);
    content: '';
    display: block;
    height: 26px;
    left: -2px;
    position: absolute;
    top: -3px;
    transition: all 0.3s ease;
    width: 26px;
}
.lbl:active:after {
    transform: scale(1.15, 0.85);
}
.cbx:checked ~ label {
    background: ${theme('mode', styles.background_checked)};
}
.cbx:checked ~ label:after {
    background: #179588;
    left: 20px;
}
.press {
    margin-bottom: 40px;
}
.hidden {
    display: none;
}
`;

export default class ToggleSwitch extends React.PureComponent {
    static propTypes = {
      isChecked: PropTypes.bool
    }

    static defaultProps = {
      isChecked: false
    }

    render() {
      const { isChecked } = this.props;
      return (
        <Switch>
          <div className="row press">
            <input type="checkbox" className="cbx hidden" checked={isChecked} onChange={() => {}} />
            <label className="lbl" />
          </div>
        </Switch>
      );
    }
}
