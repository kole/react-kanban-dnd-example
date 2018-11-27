import React from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';

import ToggleSwitch from '../../Common/ToggleSwitch/ToggleSwitch';

const DarkMode = styled.div`
display: flex;

> span {
    flex: 1;
    justify-content: flex-start;
}
`;

const handleClick = (store) => {
  store.ConfigStore.toggleDarkMode();
};

export default @inject('rootStore') @observer class DarkModeComponent extends React.Component {
  render() {
    const { rootStore } = this.props;
    return (
      <DarkMode onClick={() => handleClick(rootStore)}>
        <span>Dark Mode</span>
        <ToggleSwitch isChecked={rootStore.ConfigStore.darkModeEnabled} />
      </DarkMode>
    );
  }
}
