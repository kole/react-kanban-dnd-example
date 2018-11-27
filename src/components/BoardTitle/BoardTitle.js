import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './BoardTitle.styles';
import size from './BoardTitle.size';

const BoardTitleComponent = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-start;
    padding: ${theme('size', size.title_padding)};

    i {
        color: ${theme('mode', styles.icon_color)};
        display: flex;
        font-size: ${theme('size', size.icon_size)};
        margin: ${theme('size', size.icon_margin)};
    }

    .board_name {
        color: ${theme('mode', styles.title_color)};
        display: flex;
        font-size: ${theme('size', size.board_fontsize)};
    }
`;

const BoardTitle = () => (
  <BoardTitleComponent>
    <i className="material-icons">stars</i>
    <div className="board_name">Kanban Feature Development</div>
  </BoardTitleComponent>
);

export default BoardTitle;
