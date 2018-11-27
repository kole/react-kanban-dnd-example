import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { inject, observer } from 'mobx-react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import size from './Board.size';
import List from '../List/list';

const BoardComponent = styled.div`
align-items: flex-start;
display: flex;
justify-content: center;
width: ${theme('size', size.width)};
`;


export default @DragDropContext(HTML5Backend) @inject('rootStore') @observer class Board extends React.Component {
  render() {
    const { rootStore } = this.props;
    return (
      <BoardComponent>
        {
                    rootStore.BoardStore.listsWithCards.map(list => (
                      <List
                        key={`list-${list.id}`}
                        listID={list.id}
                        title={list.title}
                        cards={list.cards}
                        listCount={rootStore.BoardStore.listsWithCards.length}
                      />
                    ))
                }
      </BoardComponent>
    );
  }
}
