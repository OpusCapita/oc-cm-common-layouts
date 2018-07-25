##### FilteringPane
Provides a filtering pane with optional a tab based navigation (@opuscapita/react-responsive-navbar),
left aligned content, right aligned content and dropdown menu (@opuscapita/react-dropdown).

| Prop name           | Type      | Default  | Description                                |
| ------------------- | --------- | -------- | ------------------------------------------ |
| class               | string    | ''       | ID for the DOM element |
| id                  | string    | ''       | Class for the DOM element |
| tabs                | tabsType  |          | Defines options for the responsive navigation bar (see tabsType for more information). |
| leftAlignedContent  | node      | null     | Left aligned content |
| rightAlignedContent | node      | null     | Right aligned content |
| menuItems           | array     | []       | @opuscapita/react-dropdown: List of the dropdown menu items (check menuItems props from @opuscapita/react-dropdown) |


###### Types

- __tabsType:__ 

| Prop name           | Type      | Default  | Description                                |
| ------------------- | --------- | -------- | ------------------------------------------ |
| activeKey           | number    | required | @opuscapita/react-responsive-navbar: Navbar item to be active initially |
| list                | list      | required | @opuscapita/react-responsive-navbar: navigation items |
| onSelect            | function  | null     | @opuscapita/react-responsive-navbar: Callback fired when the active item changes |
| showNavItemBorder   | bool      | false    | @opuscapita/react-responsive-navbar: show bottom-border below navbar items |
| showNavItemTooltip  | bool      | true     | @opuscapita/react-responsive-navbar: enables tooltips for nav items |
