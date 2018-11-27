import React from 'react';
import { inject } from 'mobx-react';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './MainMenuNav.styles';
import size from './MainMenuNav.size';

const MainMenuNav = styled.div`
    display: flex;

    > a {
        align-items: center;
        border-left: 1px solid ${theme('mode', styles.border_color)};
        color: ${theme('mode', styles.text_color)};
        display: flex;
        flex: 1;
        padding: ${theme('size', size.padding)};
        text-decoration: none;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    > a:hover {
        color: ${theme('mode', styles.hover_color)};
    }

    > a i {
        font-size: ${theme('size', size.icon_font_size)};
    }
`;

const handleClick = (e, store) => {
  e.preventDefault();
  store.UIStore.toggleMainMenuIsOpen();
};

export default @inject('rootStore') class MainMenuComponent extends React.Component {
  render() {
    const { rootStore } = this.props;
    return (
      <MainMenuNav>
        <a href="#" onClick={e => handleClick(e, rootStore)}>
          <i className="material-icons">menu</i>
        </a>
      </MainMenuNav>
    );
  }
}
