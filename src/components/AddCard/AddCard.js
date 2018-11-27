import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './AddCard.styles';
import size from './AddCard.size';

const AddCardComponent = styled.div`
    display: flex;
    flex: 1;

    > a {
        border: 1px solid ${theme('mode', styles.border_color)};
        color: ${theme('mode', styles.text_color)};
        display: flex;
        flex: 1;
        justify-content: center;
        padding: ${theme('size', size.button_padding)};
        text-decoration: none;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    > a:hover {
        border: 1px solid ${theme('mode', styles.hover_border_color)};
        color: ${theme('mode', styles.hover_text_color)};
    }
`;

const AddCard = () => (
  <AddCardComponent>
    <a href="">Add Card</a>
  </AddCardComponent>
);

export default AddCard;
