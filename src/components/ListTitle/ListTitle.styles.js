import themes from '../../constants/themes';
import colors from '../../constants/colors';

const { LIGHT, DARK } = themes;

export default {
  icon_color: {
    [LIGHT]: colors.green,
    [DARK]: colors.green
  },
  title_color: {
    [LIGHT]: '#000',
    [DARK]: '#ccc'
  }
};
