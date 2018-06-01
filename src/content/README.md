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
| grow                     | number           | 1          | Column's flex-grow CSS property. It specifies what amount of space inside the flex container the item should take up. |           

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
