import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

import size from './Label.size';

const Label = styled.div`
align-items: flex-start;
height: ${theme('size', size.height)};
margin: ${theme('size', size.margin)};
width: ${theme('size', size.width)};
`;

export default class Item extends React.PureComponent {
    static propTypes = {
      color: PropTypes.string.isRequired
    }

    render() {
      const { color } = this.props;
      return (
        <Label style={{ backgroundColor: color }} />
      );
    }
}
