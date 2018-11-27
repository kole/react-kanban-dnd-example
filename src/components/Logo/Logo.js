import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './Logo.styles';

const LogoComponent = styled.div`
    align-items: center;
    color: ${theme('mode', styles.logo_text_color)};
    display: flex;
    flex: 1;
    font-size: 24px;
    padding-left: 24px;

    > i {
        color: ${theme('mode', styles.text_color)};
        margin: 0 8px;
    }

    > span {
        color: ${theme('mode', styles.text_color)};
        font-size: 14px;
    }
`;

const Logo = () => (
  <LogoComponent>
  kanban
    <i className="material-icons">keyboard_arrow_right</i>
    <span>kanban project management</span>
  </LogoComponent>
);

export default Logo;
