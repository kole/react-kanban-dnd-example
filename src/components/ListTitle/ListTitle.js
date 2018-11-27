import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './ListTitle.styles';
import size from './ListTitle.size';

const ListTitleComponent = styled.div`
color: ${theme('mode', styles.title_color)};
font-size: ${theme('size', size.font_size)};
font-weight: ${theme('size', size.font_weight)};
padding: ${theme('size', size.padding)};

> i {
    color: ${theme('mode', styles.icon_color)};
    font-size: ${theme('size', size.icon_font_size)};
    margin: ${theme('size', size.icon_margin)};
}
`;

export default class ListTitle extends React.PureComponent {
    static propTypes = {
      title: PropTypes.string
    }

    static defaultProps = {
      title: 'List Title'
    }

    render() {
      const { title } = this.props;
      return (
        <ListTitleComponent>
          <i className="material-icons">radio_button_unchecked</i>
          {title}
        </ListTitleComponent>
      );
    }
}
