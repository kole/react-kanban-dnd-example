import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from 'styled-theming';

import size from './ItemUserContainer.size';
import AddUser from '../ItemAddUser/ItemAddUser';
import User from '../ItemUser/ItemUser';

const UserContainer = styled.div`
align-items: center;
display: flex;
justify-content: flex-end;
padding: ${theme('size', size.padding)};
`;

export default class ItemUserContainer extends React.PureComponent {
    static propTypes = {
      users: PropTypes.any
    }

    static defaultProps = {
      users: []
    }

    render() {
      const { users } = this.props;
      return (
        <UserContainer>
          <AddUser />
          { users.map(user => (user.id ? <User key={`user-${user.id}`} user={user} /> : null)) }
        </UserContainer>
      );
    }
}
