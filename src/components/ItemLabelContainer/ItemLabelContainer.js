import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

import size from './ItemLabelContainer.size';
import Label from '../ItemLabel/ItemLabel';

const LabelContainer = styled.div`
display: flex;
flex-direction: row;
margin: ${theme('size', size.margin)};
`;

export default class ItemLabelContainer extends React.PureComponent {
    static propTypes = {
      labels: PropTypes.any
    }

    render() {
      const { labels } = this.props;
      return (
        <LabelContainer>
          {
                    labels.length > 0
                      ? labels.map(label => <Label color={label.color} title={label.title} key={`label-${label.id}`} />)
                      : ''
                }
        </LabelContainer>
      );
    }
}
