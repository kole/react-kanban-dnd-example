import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import size from './IconContainer.size';

import Attachment from '../ItemIconAttachment/ItemIconAttachment';
import Comments from '../ItemIconComments/ItemIconComments';
import Description from '../ItemIconDescription/ItemIconDescription';

const IconContainer = styled.div`
display: flex;
padding: ${theme('size', size.padding)};

> div {
    margin-right: ${theme('size', size.div_margin)};
}
`;

export default class ItemIconContainer extends React.PureComponent {
  render() {
    const { meta: { attachments, comments, description } } = this.props;
    return (
      <IconContainer>
        { description ? <Description /> : '' }
        { comments ? <Comments count={comments} /> : ''}
        { attachments ? <Attachment count={attachments} /> : ''}
      </IconContainer>
    );
  }
}
