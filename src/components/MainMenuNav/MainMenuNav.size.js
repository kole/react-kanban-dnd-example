import themes from '../../constants/themes';

const { COZY, COMPACT } = themes;

export default {
  box_shadow: {
    [COZY]: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    [COMPACT]: '0'
  },
  hover_box_shadow: {
    [COZY]: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    [COMPACT]: '0'
  },
  padding: {
    [COZY]: '24px',
    [COMPACT]: '10px'
  },
  icon_font_size: {
    [COZY]: '24px',
    [COMPACT]: '16px'
  },
  icon_margin: {
    [COZY]: '0 6px 0 0',
    [COMPACT]: '0 6px 0 0'
  }
};
