import React from 'react';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import styled from 'styled-components';
import theme from 'styled-theming';
import FlipMove from 'react-flip-move';

import styles from './List.styles';
import size from './List.size';

import ListTitle from '../ListTitle/ListTitle';
import Card from '../Card/Card';
import AddCard from '../AddCard/AddCard';

import dragTypes from '../../constants/dragTypes';

const ListMain = styled.div`
align-items: flex-start;
background: ${theme('mode', styles.background)};
border-radius: 2px;
box-shadow: ${theme('mode', styles.box_shadow)};
margin: ${theme('size', size.margin)};
padding: ${theme('size', size.padding)};
`;

const listTarget = {
  drop(props, monitor, component) {
    const { listID } = props;
    const { cardID } = monitor.getItem();
    const store = component.context.mobxStores.rootStore;
    store.DragCardStore.cardDropped(cardID, listID);
  }
};

const collect = connect => ({
  connectDropTarget: connect.dropTarget()
});

export default @DropTarget(dragTypes.CARD, listTarget, collect) @inject('rootStore') @observer class List extends React.Component {
    static propTypes = {
      listID: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      cards: PropTypes.arrayOf(PropTypes.object),
      listCount: PropTypes.number,
      connectDropTarget: PropTypes.func.isRequired
    }

    static defaultProps = {
      cards: [],
      listCount: 0
    }

    constructor(props) {
      super(props);
      this.moveCard = this.moveCard.bind(this);
      this.state = {
        hoverCard: undefined,
        listID: undefined,
        cardID: undefined,
        position: undefined
      };
    }

    setListWidth() {
      const { listCount } = this.props;
      const w = window.innerWidth / listCount;
      const obj = { width: `${w}px` };
      return obj;
    }

    moveCard(hoverCard, listID, cardID, position) {
      this.setState({
        hoverCard, listID, cardID, position
      });
    }

    render() {
      const {
        cards, title, listID, connectDropTarget, rootStore
      } = this.props;
      return connectDropTarget(
        <div style={this.setListWidth()}>
          <ListMain>
            <ListTitle title={title} />
            <FlipMove
              duration={250}
              easing="linear"
              appearAnimation="accordionVertical"
            >
              {
                            cards.map(card => (
                              <Card
                                key={`card-${card.id}`}
                                cardID={card.id}
                                listID={listID}
                                card={card}
                                labels={card.labels}
                                position={card.position}
                                store={rootStore}
                                moveCard={this.moveCard}
                                state={this.state}
                              />
                            ))
                        }
            </FlipMove>
            <AddCard listID={listID} />
          </ListMain>
        </div>
      );
    }
}
