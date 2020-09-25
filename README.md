# Aspect Ratio Plugin for Tailwind CSS

## Requirements

This plugin adds line clamps with breakpoint support based on the tailwindcss-aspect-ratio plugin by `webdna`.  
Props to `Diego Czul (@luisczul)` for helping me get this working.

## Installation

```bash
npm install tailwindcss-line-clamp
```

```js
// tailwind.config.js
module.exports = {
  theme: {
    lineClamp: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], // defaults to this
  },
  plugins: [
    require('tailwindcss-line-clamp'),
  ],
};
```

The above configuration would create the following classes, as well as their responsive variants:

```css
.clamp-1 {
  display: -webkit-box;
  box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
}

.xl\:clamp-1 {
  display: -webkit-box;
  box-orient: vertical;
  line-clamp: 1;
  overflow: hidden;
}

.clamp-2 {
  display: -webkit-box;
  box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
}

.clamp-3 {
  display: -webkit-box;
  box-orient: vertical;
  line-clamp: 3;
  overflow: hidden;
}


```
