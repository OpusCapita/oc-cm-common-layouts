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
| children                 | node             | null       | Create your own header        