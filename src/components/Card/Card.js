import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { DragSource, DropTarget } from 'react-dnd';

import styles from './card.styles';
import size from './card.size';

import LabelContainer from '../ItemLabelContainer/ItemLabelContainer';
import ItemIconContainer from '../ItemIconContainer/ItemIconContainer';
import ItemUsersContainer from '../ItemUsersContainer/ItemUsersContainer';
import CardNumber from '../CardNumber/CardNumber';

import dragTypes from '../../constants/dragTypes';

const CardComponent = styled.div`
border: 1px solid ${theme('mode', styles.border_color)};
border-radius: 2px;
color: ${theme('mode', styles.text_color)};
cursor: pointer;
line-height: ${theme('size', size.line_height)};
margin: ${theme('size', size.margin)};
padding: ${theme('size', size.padding)};
position: relative;
z-index: 0;
transition: transform 0.2s;
transform: ${props => (props.isOver ? 'scale3d(1.1, 1.1, 1)' : '')};

:hover {
    background: ${theme('mode', styles.card_hover)};
}

:before {
    background: repeating-linear-gradient(45deg, ${theme('mode', styles.dragging_background)});
    bottom: 0;
    content: '';
    display: ${props => (props.isDragging ? 'block' : 'none')};
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    z-index: 2;
}
`;

const cardSource = {
  beginDrag(props) {
    const { cardID, position, listID } = props;
    return { cardID, position, listID };
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

const cardTarget = {
  hover(props, monitor, component) {
    const {
      cardID, listID, store, moveCard, state
    } = props;
    const source = monitor.getItem();
    const positionOfHoveredCard = props.position;
    const positionOfDraggedCard = source.position;
    let pos = positionOfDraggedCard;

    // Get position of hovered card to determine position of dragged card
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
    const clientOffset = monitor.getClientOffset();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // hovering over the top half of a card: new position should be hover-card position - 1
    if (hoverClientY < hoverMiddleY) {
      pos = positionOfHoveredCard - 1;
    }

    // hovering over the bottom half of a card: new position should be hover-card position + 1
    if (hoverClientY > hoverMiddleY) {
      pos = positionOfHoveredCard + 1;
    }

    const hoverCard = `l${listID}-c${cardID}-p${pos}`;

    // Only go past this point if there is a new position being hovered over
    if (state.hoverCard && state.hoverCard === hoverCard) return;
    moveCard(hoverCard, listID, cardID, pos);

    store.DragCardStore.setCardPosition(cardID, pos);
  }
};

const collectTarget = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
});

const handleClick = (store, card) => {
  store.CardStore.setActiveCard(card);
  store.UIStore.toggleModalIsOpen();
};

export default
  @DropTarget(dragTypes.CARD, cardTarget, collectTarget)
  @DragSource(dragTypes.CARD, cardSource, collect)
class Card extends React.Component {
    static propTypes = {
      store: PropTypes.any,
      cardID: PropTypes.number,
      card: PropTypes.object,
      labels: PropTypes.any,
      position: PropTypes.number,
      listID: PropTypes.number.isRequired,
      connectDragSource: PropTypes.func,
      connectDropTarget: PropTypes.func,
      isDragging: PropTypes.bool
    }

    static defaultProps = {
      labels: []
    }

    render() {
      const {
        card, labels, connectDragSource, isDragging, connectDropTarget, isOver, store
      } = this.props;
      const { title } = card;
      return connectDragSource(
        connectDropTarget(
          <div>
            <CardComponent
              isDragging={isDragging}
              isOver={isOver}
              onClick={() => handleClick(store, card)}
            >
              <CardNumber card={card} />
              <LabelContainer labels={labels} />
              {title}
              <ItemIconContainer meta={card} />
              <ItemUsersContainer users={card.users} />
            </CardComponent>
          </div>
        )
      );
    }
  }
