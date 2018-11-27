import themes from '../../constants/themes';
import colors from '../../constants/colors';

const { LIGHT, DARK } = themes;

export default {
  icon_color: {
    [LIGHT]: colors.red,
    [DARK]: colors.red
  },
  title_color: {
    [LIGHT]: colors.gray,
    [DARK]: colors.gray_light
  }
};
