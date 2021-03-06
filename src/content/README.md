### Content components

##### Content.Row
Wraps Content.Column components.

| Prop name | Type   | Default | Description                              |
| --------- | ------ | ------- | ---------------------------------------- |
| children  | node   | null    | n amount of Content.Columns              |
| id        | string | ''      | element's `id` attribute                 |
| className | string | ''      | element's `class` attribute              |
| stretch   | bool   | false   | stretch columns to fill the content area |

##### Content.Column
Used as a child of Content.Row

| Prop name  | Type   | Default | Description                                                                                                           |
| ---------- | ------ | ------- | --------------------------------------------------------------------------------------------------------------------- |
| children   | node   | null    | n amount of nodes (see e.g. Content.Card                                                                              |
| id         | string | ''      | element's `id` attribute                                                                                              |
| className  | string | ''      | element's `class` attribute                                                                                           |
| isLastItem | bool   | false   | Content.Row takes care of this to control the column margins                                                          |
| grow       | number | 1       | Column's flex-grow CSS property. It specifies what amount of space inside the flex container the item should take up. |

#### Content.Card
Common content block.

| Prop name    | Type          | Default   | Description                                                                                        |
| ------------ | ------------- | --------- | -------------------------------------------------------------------------------------------------- |
| children     | node          | null      | Card content                                                                                       |
| id           | string        | required  | element's `id` attribute                                                                           |
| className    | string        | ''        | element's `class` attribute                                                                        |
| title        | string        | null      | Title of the card                                                                                  |
| height       | number/string | 'auto'    | Height of the card                                                                                 |
| icon         | node          | null      | Icon in the top right corner                                                                       |
| onIconClick  | function      | null      | Callback that gets triggered when icon is clicked on                                               |
| isExpandable | boolean       | false     | Can the card be collapsed/expanded                                                                 |
| isExpanded   | function      | undefined | Is the card expanded                                                                               |
| onExpand     | function      | undefined | Callback that gets triggered when the card is expanded/collapsed (id: string, isExpanded: boolean) |
| loading      | boolean       | false     | Displays a loading spinner in `Card.Header`.                                                       |
| header       | node          | undefined | Custom header                                                                                      |

#### Content.InputRow
Wrapper for input elements. Creates a two column row, label on the left and your input field
on the right.

| Prop name     | Type                 | Default   | Description                                                                                                     |
| ------------- | -------------------- | --------- | --------------------------------------------------------------------------------------------------------------- |
| children      | node                 | null      | Element to be wrapped                                                                                           |
| id            | string               | required  | The ID                                                                                                          |
| label         | string, node         | null      | Row/field label                                                                                                 |
| required      | bool                 | false     | Is it a required field                                                                                          |
| error         | string, bool         | ''        | Potential error message. Triggers error styles                                                                  |
| warning       | string, bool         | ''        | Potential warning message. Triggers warning styles                                                              |
| showError     | bool                 | true      | If error/warning container is not shown, row is going to be a bit leaner. Good when displaying read only values |
| showErrorInLabel | bool              | true      | indicate error/warning by chancing the label color (red/yellow). True by default. |
| showErrorInPopup  | bool                 | false     | Displays error/warning in a popup |
| className     | string               | null      | className will also be assigned to the children element                                                         |
| labelWidth    | string, number       | undefined | Width of the label. If undefined (default), theme value will be used                                            |
| valueWidth    | string, number       | 'auto'    | Width of the input/value container                                                                              |
| append        | string, number, node | undefined | Appends content after the value element                                                                         |

#### Content.ReadonlyRow
HOC that uses InputRow to show a value.

| Prop name | Type           | Default  | Description                                               |
| --------- | -------------- | -------- | --------------------------------------------------------- |
| id        | string         | required | The ID                                                    |
| label     | string, node   | null     | Row/field label                                           |
| value     | string, number | null     | Value to be wrapped in a span                             |
| normalize | function       | null     | Normalizer callback. Transforms value to a needed format. |

#### Content.InputColumn
Wrapper for input elements. Creates two row column, where label at top and your input field in bottom.

| Prop name     | Type         | Default  | Description                                                                                                        |
| ------------- | ------------ | -------- | ------------------------------------------------------------------------------------------------------------------ |
| id            | string       | required | The ID                                                                                                             |
| children      | node         | null     | Element to be wrapped                                                                                              |
| label         | string, node | null     | Column/field label                                                                                                 |
| required      | bool         | false    | Is it a required field                                                                                             |
| error         | string, bool | ''       | Potential error message. Triggers error styles                                                                     |
| warning       | string, bool | ''       | Potential warning message. Triggers warning styles                                                                 |
| showError     | bool         | true     | If error/warning container is not shown, column is going to be a bit leaner. Good when displaying read only values |
| showErrorInPopup  | bool         | false    | Displays error/warning in a popup |
| showErrorInLabel | bool              | true      | indicate error/warning by chancing the label color (red/yellow). True by default.
| className     | string       | null     | className will also be assigned to the children element                                                            |

#### Content.ReadonlyColumn
HOC that uses InputColumn to show value.

| Prop name | Type           | Default  | Description                                               |
| --------- | -------------- | -------- | --------------------------------------------------------- |
| id        | string         | required | The ID                                                    |
| label     | string, node   | null     | Column/field label                                        |
| value     | string, number | null     | Value to be wrapped in a span                             |
| normalize | function       | null     | Normalizer callback. Transforms value to a needed format. |

#### Content.Masonry
Masonry works by placing elements in optimal position based on available vertical space.

| Prop name             | Type          | Default | Description                                                                                                         |
| --------------------- | ------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| children              | node          | null    | n amount of nodes (see e.g. Content.Card                                                                            |
| id                    | string        | ''      | element's `id` attribute                                                                                            |
| className             | string        | ''      | element's `class` attribute                                                                                         |
| columnCountExtraLarge | number        | 4       | A number of columns on an extra-large screen                                                                        |
| columnCountLarge      | number        | 3       | A number of columns on a large screen                                                                               |
| columnCountMedium     | number        | 2       | A number of columns on a medium sized screen                                                                        |
| columnCountSmall      | number        | 1       | A number of columns on a small screen                                                                               |
| topOffset             | string/number | 0       | distance from the top of the screen. In case you have a Header, the topOffset will be the height of the header (40) |
