### Header Components

##### Header.Basic
Basic header containing 3 slots you can put your content in to.

| Prop name                | Type             | Default    | Description                               |
| ------------------------ | ---------------- | ---------- | ------------------------------------------|
| left                     | node             | null       | 1st column content |
| center                   | node             | null       | 2nd column content |
| right                    | node             | null       | 3rd column content |
| sideSectionBasis         | string, number   | 200px      | Side column's (left, right) flex-basis value. The center column will take all the remaining space |
##### Header.Custom
Wraps your custom content.

| Prop name                | Type             | Default    | Description                               |
| ------------------------ | ---------------- | ---------- | ------------------------------------------|
| children                 | node             | null       | Create your own header                    |
