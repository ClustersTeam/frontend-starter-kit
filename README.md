# Tooling

- Package manager - the lowest npm version should be at least v5.6.0 and node version - v8.11.1
- Task runner - Gulp
- Templating -Handlebars
- Reinforce frontend style - Linters and Prettier(install plugin in VSC)
- Jasmine (https://jasmine.github.io/setup/nodejs.html)

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

# Steps

1. Clone repo in the root folder of your project

2. When including the starter kit in any new project change the paths
in the paths.js (only dist paths in the ResourcePackages/[yourtheme])

3. To install manually node modules run:

```
> npm install
```

4. Before start working on the project run 

```
> npm run prod
```

5. When adding a new js library (node_modules package) run

```
> npm run prod
```

6. When adding any new file (js/css/templates/images) run

```
> npm run prod
```

7. Start watcher again and enjoy!

```
> npm run watch
```

# Created by

[Teodora Kacharova](https://github.com/tekacharova), [Emiliya Sokolova](https://github.com/emilium), [Konstantin Ivanov](https://github.com/KocetoIvanov), [Daut Molahasanov](https://github.com/daut-molahasanov)
