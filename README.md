# oc-cm-common-layouts

### Description
Describe the component here

### Installation
```
npm install @opuscapita/oc-cm-common-layouts
```

### Demo
View the [DEMO](https://opuscapita.github.io/oc-cm-common-layouts)

### Builds
#### UMD
The default build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### APIS and components

#### [Header Components API](./src/header/README.md)
Contains some commonly used header components.

#### [Content Components API](./src/content/README.md)
Rows, Columns, Cards and everything you need to organize your content.

#### [Layout Components API](./src/layout/README.md)
Wrappers and containers, that will help to build a solid base for your view.

#### [Primitives](./src/primitives/README.md)
Collection of low level styled components. Building blocks for composing all the more
advanced layout compoents.