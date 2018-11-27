import React from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './CardNumber.styles';
import size from './CardNumber.size';

const CardNumberComponent = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    position: absolute;
    top: 0;
    right: 0;

    > div {
        background: ${theme('mode', styles.background)};
        border: 1px solid ${theme('mode', styles.border_color)};
        border-radius: 2px;
        border-right: 0;
        border-top: 0;
        color: ${theme('mode', styles.text_color)};
        font-size: ${theme('size', size.font_size)};
        padding: ${theme('size', size.padding)};
    }
`;

export default @inject('rootStore') class CardNumber extends React.Component {
    static propTypes = {
      card: PropTypes.object.isRequired
    }

    render() {
      const { card, rootStore } = this.props;
      const { showCardNumbers } = rootStore.ConfigStore;
      return showCardNumbers ? <CardNumberComponent title={`Card number ${card.id}`}><div>{card.id}</div></CardNumberComponent> : null;
    }
}
