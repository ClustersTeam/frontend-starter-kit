# Tooling

- Package manager - npm 6/8
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
- To install manually node modules run:

```
> npm install
```
- Install Jasmine globally (Optional) 
```
> npm install -g jasmine
```

# Setup

The following commands are available:

- to start the project before watch run

```
> npm run prod
```
# Jasmine Tests

Place your tests in /spec:

### If you have Jasmine globally

To run a specific test run:
```
> jasmine spec\test.spec.js
```

To run all the tests in the folder run:
```
> jasmine 
```
### If you only have gulp-jasmine

To run all the tests in the folder run:
```
> gulp jasmine
```


# Steps

1. Before start working on the project run 

```
> npm run prod
```

2. When adding a new js library (node_modules package) run

```
> npm run prod
```
