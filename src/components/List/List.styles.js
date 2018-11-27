import themes from '../../constants/themes';

const { LIGHT, DARK } = themes;

export default {
  background: {
    [LIGHT]: '#fff',
    [DARK]: 'rgba(255, 255, 255, 0.1)'
  },
  box_shadow: {
    [LIGHT]: '0 1px 8px rgba(0,0,0,0.05), 0 1px 20px rgba(0,0,0,0.05)',
    [DARK]: '0'
  }
};
