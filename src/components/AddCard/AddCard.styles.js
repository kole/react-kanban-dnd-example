import themes from '../../constants/themes';
import colors from '../../constants/colors';

const { LIGHT, DARK } = themes;

export default {
  text_color: {
    [LIGHT]: '#ccc',
    [DARK]: '#999'
  },
  hover_text_color: {
    [LIGHT]: '#999',
    [DARK]: '#ccc'
  },
  border_color: {
    [LIGHT]: '#fff',
    [DARK]: 'transparent'
  },
  hover_border_color: {
    [LIGHT]: '#eee',
    [DARK]: colors.dark_blue_highlight
  }
};
