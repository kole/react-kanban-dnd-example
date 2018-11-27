import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './IconAttachment.styles';
import size from './IconAttachment.size';

const IconAttachment = styled.div`
align-items: center;
color: ${theme('mode', styles.text_color)};
display: flex;

> i {
    flex: 1;
    font-size: ${theme('size', size.icon_font_size)};
}

> span {
    flex: 1;
    font-size: ${theme('size', size.text_font_size)};
}
`;

export default class ItemIconAttachment extends React.PureComponent {
    static propTypes = {
      count: PropTypes.number.isRequired
    }

    render() {
      const { count } = this.props;
      return (
        <IconAttachment>
          <i className="material-icons">attach_file</i>
          <span>{count}</span>
        </IconAttachment>
      );
    }
}
