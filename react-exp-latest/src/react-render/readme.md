1] how react render works
https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/
https://blog.isquaredsoftware.com/2023/08/presentations-react-rendering-behavior/
2] A react component rerenders when
*its parent component rerenders
*any hook used inside it, returns a reference which is not matching with previous reference.
*useState returns a reference which is not matching with previous reference.
*current prop passed not matching with previous prop.
*if prop is object, its reference is compared using shallow equality ===, if prop is primitive like string, number then its value is compared.same thing for state object/primitive.
* prop (current vs previous),state(current vs previous) comparison occurs using shallow equality.
* in shallow equality objects are compared by references, primitives are compared by values.
*if its child components current reference dont match with previous reference.

3] Improving Rendering Performance

