# Tooling

- Package manager - npm 6/8
- Task runner - Gulp
- Templating -Handlebars
- Reinforce frontend style - Linters and Prettier(install plugin in VSC)

#WHY Gulp not Grunt or Webpack?
1. A fron­tend work­flow automa­tion tool Grunt is some­what more ver­bose to con­fig­ure. It’s also in gen­er­al slow­er than Gulp for build­ing things, due to its file-ori­ent­ed approach.
2. For web­pack to be used effec­tive­ly, it real­ly needs to be embraced whole-hog and used not just as a mod­ule bundler, but as a mod­ule loader as well.

# CSS

Reference (https://github.com/ClustersTeam/css/blob/master/README.md)

1. Minification CSS Nano (https://github.com/cssnano/cssnano)
2. Unused CSS: Remove unused CSS selectors. 🛠 UnCSS Online 🛠 PurifyCSS 🛠 PurgeCSS 🛠 Chrome DevTools Coverage

# HTML

1. Templating - Next.js / Handlebars

# JavaScript

1. Minification - UglifyJS (https://www.npmjs.com/package/uglify-js)
2. jQuery, ES6 (babel transpiling)

# Media

1. Handling icons (svg, icon fonts)
2. Try using CSS3 effects when it's possible (instead of a small image)
3. When it's possible, use fonts instead of text encoded in your images
4. Use SVG
5. Lazyloading
6. Handling responsive images (srcset, picture)

# Installations

- Download and install Node.js(for npm) from the [Node.js](https://nodejs.org/).
- To install manually node modules run:

```
> npm install
```

# Setup

The following commands are available:

- to start the project before watch run

```
> npm run prod
```

# Steps

1. Before start working on the project run > npm run prod.
2. When adding a new js library (node_modules package) run > npm run prod.
