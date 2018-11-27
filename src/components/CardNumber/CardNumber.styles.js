import themes from '../../constants/themes';
import colors from '../../constants/colors';

const { LIGHT, DARK } = themes;

export default {
  text_color: {
    [LIGHT]: '#bbb',
    [DARK]: '#bbb'
  },
  background: {
    [LIGHT]: '#fafafa',
    [DARK]: colors.dark_blue_highlight
  },
  border_color: {
    [LIGHT]: '#eee',
    [DARK]: colors.dark_blue
  }
};
