import React from 'react';
import { observer, Provider } from 'mobx-react';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

import RootStore from '../../stores/RootStore';

import styles from './app.styles';

import TopNav from '../TopNav/TopNav';
import BoardContainer from '../BoardContainer/BoardContainer';
import MainMenu from '../MainMenu/MainMenu';

const store = new RootStore();

injectGlobal`
@import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');
@import url('https://fonts.googleapis.com/css?family=Nunito:300,600');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
html, body {
    background-color: ${styles.background.light};
}
`;

const AppContainer = styled.div`
background-color: ${theme('mode', styles.background)};
display: flex;
flex-direction: column;
font-family: Nunito, sans-serif;

input {
    outline: none;
}
`;

export default @observer class App extends React.Component {
  render() {
    return (
      <Provider rootStore={store}>
        <ThemeProvider theme={
                    {
                      mode: store.ConfigStore.darkModeEnabled ? 'dark' : 'light',
                      size: 'cozy'
                    }
                }
        >
          <AppContainer>
            <MainMenu />
            <TopNav />
            <BoardContainer />
          </AppContainer>
        </ThemeProvider>
      </Provider>
    );
  }
}
