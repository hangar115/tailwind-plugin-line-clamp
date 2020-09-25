const plugin = require('tailwindcss/plugin');
const _ = require('lodash');

module.exports = plugin(function({ theme, variants, e, addUtilities }) {
  const lineClampUtilities = _.fromPairs(
    _.map(theme('lineClamp'), (value) => {
      return [
        `.${e(`clamp-${value}`)}`,
        {
            display: -webkit-box,
            box-orient: vertical,
            line-clamp: ${value},
            overflow: hidden,
        },
      ];
    })
  );
}, {
  theme: {
    lineClamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
});
