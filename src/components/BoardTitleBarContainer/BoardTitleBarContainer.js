import React from 'react';
import styled from 'styled-components';

import BoardTitle from '../BoardTitle/BoardTitle';
import BoardSearch from '../BoardSearch/BoardSearch';

const BoardTitleBarContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 1;
    justify-content: flex-start;
    width: calc(95% - 2.8em);
`;

const BoardTitleBarComponent = () => (
  <BoardTitleBarContainer>
    <BoardTitle />
    <BoardSearch />
  </BoardTitleBarContainer>
);

export default BoardTitleBarComponent;
