import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';
import Color from 'color';

import styles from './ItemUser.styles';
import size from './ItemUser.size';
import themes from '../../constants/themes';

const { LIGHT, DARK } = themes;

const bg = theme('mode', {
  [LIGHT]: props => Color(props.color).lighten(0.4).string(),
  [DARK]: props => Color(props.color).string()
});

const txt = theme('mode', {
  [LIGHT]: props => Color(props.color).string(),
  [DARK]: '#fff'
});

const User = styled.div`
    border: 1px solid ${theme('mode', styles.text_color)};
    border-radius: 3px;
    display: flex;
    font-size: ${theme('size', size.text_size)};
    height: ${theme('size', size.box_size)};
    margin: ${theme('size', size.margin)};
    overflow: hidden;
    width: ${theme('size', size.box_size)};

    background: ${bg};
    border-color: ${props => Color(props.color).string()};
    color: ${txt};

    > span {
        align-items: center;
        display: flex;
        flex: 1;
        justify-content: center;
    }
`;

export default class ItemUser extends React.PureComponent {
    static propTypes = {
      user: PropTypes.object
    }

    render() {
      const { user } = this.props;
      return (
        <User color={user.color}>
          <span>{ user.initials }</span>
        </User>
      );
    }
}
