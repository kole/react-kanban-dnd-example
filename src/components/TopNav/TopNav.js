import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './TopNav.styles';
import Logo from '../Logo/Logo';
import MainMenuNav from '../MainMenuNav/MainMenuNav';

const TopNavComponent = styled.div`
background: ${theme('mode', styles.background)};
border-bottom: 1px solid ${theme('mode', styles.border_color)};
display: flex;
height: 70px;
`;

const TopNav = () => (
  <TopNavComponent>
    <Logo />
    {/* <TopNavUserProfile /> */}
    <MainMenuNav />
  </TopNavComponent>
);

export default TopNav;
