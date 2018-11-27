import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './ItemAddUser.styles';
import size from './ItemAddUser.size';

const AddUser = styled.div`
border: 1px dashed ${theme('mode', styles.border_color)};
border-radius: 3px;
color: ${theme('mode', styles.text_color)};
display: flex;
font-size: 11px;
height: ${theme('size', size.box_size)};
margin: 0 3px;
overflow: hidden;
width: ${theme('size', size.box_size)};

:hover {
    background: ${theme('mode', styles.box_hover_background)};
}

> i {
    align-items: center;
    display: flex;
    flex: 1;
    font-size: ${theme('size', size.icon_font_size)};
    justify-content: center;
}
`;

const ItemAddUser = () => (
  <AddUser>
    <i className="material-icons">add</i>
  </AddUser>
);

export default ItemAddUser;
