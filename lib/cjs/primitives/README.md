## Primitives

Styled components that provide some base styles for more advanced
components. You can extend these components simply by:

```
const AdvancedComponent = styled(PrimitiveComponent)`
  font-size: 12px;
  font-weight: bold;
`;
```

### Current primitives

##### Button (export: Primitive.Button)
Styled button. Accepts primary prop, that will color the button orange.

##### Input (export: Primitive.Input) 
Styled text input field.

##### Borderless button (export: Primitive.BorderlessButton)
Simply a transparent button element, with no border, padding nor margins.

##### Title (export: Primitive.Title)
Styled h1 element. Used e.g. in headers

##### Subtitle (export: Primitive.Subtitle)
Styled h2 element. Used e.g. in Card headers

##### Header (export: Primitive.Header)
Styled header element, which serves as a basic building block
in all of the Header components.

##### Spinner (export: Primitive.Spinner)
Simple font-awesome spinner.
