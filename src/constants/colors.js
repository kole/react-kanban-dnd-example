import Color from 'color';

const c = {
  red: Color('#fb617f'),
  blue: Color('#4680ff'),
  dark_blue: Color('#1d2835'),
  orange: Color('#feb64d'),
  green: Color('#b1d077'),
  gray: Color('#777777')
};

export default {
  red: c.red.string(),
  red_light: c.red.lighten(0.4).string(),
  blue: c.blue.string(),
  blue_light: c.blue.lighten(0.5).string(),
  dark_blue: c.dark_blue.string(),
  dark_blue_highlight: c.dark_blue.lighten(0.4).string(),
  orange: c.orange.string(),
  orange_light: c.orange.lighten(0.45).string(),
  green: c.green.string(),
  green_light: c.green.lighten(0.48).string(),
  gray: c.gray.string(),
  gray_light: c.gray.lighten(0.5).string()
};
