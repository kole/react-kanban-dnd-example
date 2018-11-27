import React from 'react';
import theme from 'styled-theming';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';
import Menu from 'react-burger-menu/lib/menus/slide';

import styles from './MainMenu.styles';
import DarkMode from './DarkMode/DarkMode';

const MainMenu = styled.div`
    .bm-burger-button {
        display: none;
    }

    .bm-cross-button {
        display: none;
    }

    .bm-menu {
        background: ${theme('mode', styles.background)};
        box-shadow: ${props => (props.isOpen ? '0 0 50px rgba(0,0,0,0.30)' : '')};
        font-size: 1.15em;
        padding: 2.5em 1.5em 0;
        transition: box-shadow 300ms linear;
    }

    .closeMenu {
        color: #aaa;
        font-size: 36px;
        position: absolute;
        right: 15px;
        text-decoration: none;
        top: 12px;
    }
`;

const closeMenu = (e, rootStore) => {
  e.preventDefault();
  rootStore.UIStore.toggleMainMenuIsOpen();
};

export default @inject('rootStore') @observer class MainMenuComponent extends React.Component {
  render() {
    const { rootStore } = this.props;
    const { mainMenuIsOpen } = rootStore.UIStore;
    return (
      <MainMenu isOpen={mainMenuIsOpen}>
        <Menu
          isOpen={mainMenuIsOpen}
          width={350}
          noOverlay
          right
        >
          <DarkMode />
          <a href="#" className="closeMenu" onClick={e => closeMenu(e, rootStore)}>&times;</a>
        </Menu>
      </MainMenu>
    );
  }
}
