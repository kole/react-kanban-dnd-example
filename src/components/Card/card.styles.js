import themes from '../../constants/themes';
import colors from '../../constants/colors';

const { LIGHT, DARK } = themes;

export default {
  card_hover: {
    [LIGHT]: 'rgba(245,247,250, 0.5)',
    [DARK]: colors.dark_blue_highlight
  },
  border_color: {
    [LIGHT]: '#eee',
    [DARK]: colors.dark_blue
  },
  text_color: {
    [LIGHT]: '#555',
    [DARK]: '#bbb'
  },
  dragging_background: {
    [LIGHT]: `#fff, #fff 10px, ${colors.blue_light} 10px, ${colors.blue_light} 20px`,
    [DARK]: '#fff, #fff 10px, #eee 10px, #eee 20px'
  }
};
