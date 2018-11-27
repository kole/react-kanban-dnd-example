import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './IconDescription.styles';
import size from './IconDescription.size';

const IconDescription = styled.div`
    align-items: center;
    color: ${theme('mode', styles.text_color)};
    display: flex;

    > i {
        flex: 1;
        font-size: ${theme('size', size.icon_font_size)};
    }
`;

const ItemIconDescription = () => (
  <IconDescription>
    <i className="material-icons">subject</i>
  </IconDescription>
);

export default ItemIconDescription;
