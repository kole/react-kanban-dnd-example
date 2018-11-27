import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import { inject, observer } from 'mobx-react';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
.ReactModal__Content--after-open {
    opacity: 1;
    transition: opacity 150ms;
}

.ReactModal__Content--before-close {
    opacity: 0;
}
`;

const CardModal = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .closeModal {
        align-items: center;
        color: #999;
        display: flex;
        font-size: 24px;
        height: 24px;
        justify-content: center;
        position: absolute;
        right: 0;
        text-decoration: none;
        top: 0;
        width: 24px;

        :hover {
            color: #222;
            text-decoration: none;
        }
    }
`;

const handleClick = (e, store) => {
  e.preventDefault();
  store.UIStore.toggleModalIsOpen();
};

export default
  @inject('rootStore')
  @observer
class CardModalClass extends React.Component {
    static propTypes = {
      rootStore: PropTypes.any
    }

    render() {
      const { rootStore } = this.props;
      const el = document.getElementById('app');
      return (
        <ReactModal closeTimeoutMS={150} isOpen={rootStore.UIStore.cardModalIsOpen} appElement={el}>
          <CardModal>
            <a href="#" className="closeModal" onClick={e => handleClick(e, rootStore)}>&times;</a>
            <h1>{rootStore.CardStore.activeCard.title}</h1>
          </CardModal>
        </ReactModal>
      );
    }
  }
