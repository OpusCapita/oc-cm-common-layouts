## Primitives

Styled components that provide some base styles for more advanced
components. You can extend these components simply by:

```
const AdvancedComponent = PrimitiveComponent.extend`
  font-size: 12px;
  font-weight: bold;
`;
```

### Current primitives

##### Borderless button
Simply a transparent button element, with no border, padding nor margins.

##### Header title
Styled h1 element used in headers

##### Header
Styled header element, which serves as a basic building block
in all of the Header components.