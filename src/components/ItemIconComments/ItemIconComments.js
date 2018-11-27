import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './IconComments.styles';
import size from './IconComments.size';

const IconComments = styled.div`
    align-items: center;
    color: ${theme('mode', styles.text_color)};
    display: flex;

    > i {
        flex: 1;
        font-size: ${theme('size', size.icon_font_size)};
        margin-right: 2px;
    }

    > span {
        flex: 1;
        font-size: ${theme('size', size.text_font_size)};
    }
`;

export default class ItemIconComments extends React.PureComponent {
    static propTypes = {
      count: PropTypes.number.isRequired
    }

    render() {
      const { count } = this.props;
      return (
        <IconComments>
          <i className="material-icons">chat_bubble_outline</i>
          <span>{count}</span>
        </IconComments>
      );
    }
}
