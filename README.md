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

### General layout components
Various wrappers, etc. 

##### Layout.Wrapper
Creates a simple 100vw/100vh wrapper for a view.

### Content components

##### Content.Row
Wraps Content.Column components.

| Prop name                | Type             | Default    | Description                               |
| ------------------------ | ---------------- | ---------- | ------------------------------------------|
| children                 | node             | null       | n amount of Content.Columns               |
| topOffset                | string/number    | 0          | distance from the top of the screen. In case you have a Header, the topOffset will be the height of the header (40) |
| stretch                  | bool             | false      | stretch columns to fill the content area  |

##### Content.Column
Used as a child of Content.Row

| Prop name                | Type             | Default    | Description                               |
| ------------------------ | ---------------- | ---------- | ------------------------------------------|
| children                 | node             | null       | n amount of nodes (see e.g. Content.Card  |
| isLastItem               | bool             | false      | Content.Row takes care of this to control the column margins |
             
#### Content.Card
Common content block.

| Prop name                | Type             | Default    | Description                               |
| ------------------------ | ---------------- | ---------- | ------------------------------------------|
| children                 | node             | null       | Card content                              |
| title                    | string           | null       | Title of the card                         |
| height                   | number/string    | 'auto'     | Height of the card                        |
| icon                     | node             | null       | Icon in the top right corner              |
  
#### Content.Masonry
Masonry works by placing elements in optimal position based on available vertical space.

| Prop name                | Type             | Default    | Description                               |
| ------------------------ | ---------------- | ---------- | ------------------------------------------|
| children                 | node             | null       | n amount of nodes (see e.g. Content.Card  |
| columnCountExtraLarge    | number           | 4          | A number of columns on an extra-large screen |
| columnCountLarge         | number           | 3          | A number of columns on a large screen |
| columnCountMedium        | number           | 2          | A number of columns on a medium sized screen |
| columnCountSmall         | number           | 1          | A number of columns on a small screen |
| topOffset                | string/number    | 0          | distance from the top of the screen. In case you have a Header, the topOffset will be the height of the header (40) |

### Header Components

##### Header.Basic
Basic header containing 3 slots you can put your content in to.

| Prop name                | Type             | Default    | Description                               |
| ------------------------ | ---------------- | ---------- | ------------------------------------------|
| left                     | node             | null       | 1st column content |
| center                   | node             | null       | 2nd column content |
| right                    | node             | null      | 3rd column content |


##### Header.Navigation
HOC for Header.Basic. Contains back button and controls (@opuscapita/react-list-items) for browsing 
through a collection of items.

| Prop name                | Type             | Default    | Description                               |
| ------------------------ | ---------------- | ---------- | ------------------------------------------|
| title                    | string           | null       | Title shown in the left side of the header |
| backUrl                  | string           | null       | Uses window.history.back() if not provided |
| showBack                 | bool             | true       | Show back button |
| goToItem                 | function         | null       | @opuscapita/react-list-items: Callback that is called when navigation to another item should happen |
| itemId                   | [number, string] | null       | @opuscapita/react-list-items: Initially selected item id |
| itemIds                  | [List, array]    | []         | @opuscapita/react-list-items: List of item ids |
| itemSeparator            | node             | null       | @opuscapita/react-list-items: Custom component to render between navigation icons. By default it renders a string [m/n]. |
| listItemsDisabled        | bool             | false      | @opuscapita/react-list-items: 	A sign of a disabled status of navigation icons |
| menuItems                | array            | []         | @opuscapita/react-dropdown: List of the dropdown menu items (check menuItems props from @opuscapita/react-dropdown) |

##### Header.Custom
Wraps your custom content.

| Prop name                | Type             | Default    | Description                               |
| ------------------------ | ---------------- | ---------- | ------------------------------------------|
| children                 | node             | null       | Create your own header                    |
### Code example
```jsx
import React from 'react';

```
