import themes from '../../constants/themes';
import colors from '../../constants/colors';

const { LIGHT, DARK } = themes;

export default {
  input_background: {
    [LIGHT]: '#fff',
    [DARK]: colors.dark_blue_highlight
  },
  icon_color: {
    [LIGHT]: '#ddd',
    [DARK]: '#666'
  },
  text_color: {
    [LIGHT]: '#999',
    [DARK]: '#999'
  },
  border_color: {
    [LIGHT]: '#eee',
    [DARK]: colors.dark_blue_highlight
  },
  focus_color: {
    [LIGHT]: '#ccc',
    [DARK]: '#666'
  },
  placeholder_color: {
    [LIGHT]: '#ddd',
    [DARK]: '#777'
  }
};
