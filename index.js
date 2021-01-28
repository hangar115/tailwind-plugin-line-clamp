const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

module.exports = plugin(function({ theme, variants, e, addUtilities, }) {
  const lineClampUtilities = _.fromPairs(
    _.map(theme('lineClamp'), (value) => {
      return [
        `.${e(`clamp-${value}`)}`,
        {
            display: '-webkit-box',
            '-webkit-box-orient': 'vertical',
            '-webkit-line-clamp': `${value}`,
            overflow: 'hidden'
        },
      ];
    })
  );

  addUtilities(lineClampUtilities, ['responsive']);
}, {
  theme: {
    lineClamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
});
