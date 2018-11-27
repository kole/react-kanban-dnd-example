import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import size from './BoardContainer.size';
import BoardTitleBarContainer from '../BoardTitleBarContainer/BoardTitleBarContainer';
import Board from '../Board/board';
import CardModal from '../CardModal/CardModal';

const BoardContainerComponent = styled.div`
align-items: center;
box-sizing: border-box;
display: flex;
flex-direction: column;
justify-content: center;
padding: ${theme('size', size.padding)};
`;

const BoardContainer = () => (
  <BoardContainerComponent>
    <CardModal />
    <BoardTitleBarContainer />
    <Board />
  </BoardContainerComponent>
);

export default BoardContainer;
