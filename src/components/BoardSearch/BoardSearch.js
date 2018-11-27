import React from 'react';
import theme from 'styled-theming';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import styles from './BoardSearch.styles';
import size from './BoardSearch.size';

const Search = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    position: relative;

    > i {
        color: ${theme('mode', styles.icon_color)};
        position: absolute;
        right: ${theme('size', size.icon_position)};
    }

    > input {
        background-color: ${theme('mode', styles.input_background)};
        border: 1px solid ${theme('mode', styles.border_color)};
        border-radius: 3px;
        color: ${theme('mode', styles.text_color)};
        font-size: ${theme('size', size.input_font_size)};
        padding: ${theme('size', size.input_padding)};
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        width: 300px;
    }

    > input:focus {
        border-color: ${theme('mode', styles.focus_color)};
    }

    > input::placeholder {
        color: ${theme('mode', styles.placeholder_color)};
    }

    > a {
        align-items: center;
        color: #ccc;
        display: flex;
        font-size: 18px;
        height: 24px;
        justify-content: center;
        position: absolute;
        right: 10px;
        text-decoration: none;
        width: 24px;
    }
`;

const handleChange = (e, store) => {
  store.setSearchTerm(e.target.value);
};

const clearSearch = (e, store) => {
  e.preventDefault();
  store.clearSearch();
};

export default @inject('rootStore') @observer class BoardSearch extends React.Component {
  render() {
    const { rootStore } = this.props;
    const { searchTerm } = rootStore.BoardSearchStore;
    return (
      <Search>
        <i className="material-icons">search</i>
        <input
          type="text"
          onChange={e => handleChange(e, rootStore.BoardSearchStore)}
          value={searchTerm}
          placeholder="Search this board&hellip;"
        />
        {
                    searchTerm.length > 0
                      ? <a href="#" onClick={e => clearSearch(e, rootStore.BoardSearchStore)}>&times;</a>
                      : ''
                }
      </Search>
    );
  }
}
