import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';

import styles from './TopNavSearch.styles';
import size from './TopNavSearch.size';

const Search = styled.div`
    align-items: center;
    display: flex;
    margin: ${theme('size', size.margin)};
    position: relative;

    > i {
        color: ${theme('mode', styles.icon_color)};
        left: ${theme('size', size.icon_position)};
        position: absolute;
    }

    > input {
        border: 1px solid ${theme('mode', styles.border_color)};
        color: ${theme('mode', styles.text_color)};
        font-size: ${theme('size', size.input_font_size)};
        padding: ${theme('size', size.input_padding)};
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    > input:focus {
        border-color: ${theme('mode', styles.focus_color)};
    }

    > input::placeholder {
        color: ${theme('mode', styles.placeholder_color)};
    }
`;

const TopNavSearch = () => (
  <Search>
    <i className="material-icons">search</i>
    <input type="text" placeholder="Search" />
  </Search>
);

export default TopNavSearch;
