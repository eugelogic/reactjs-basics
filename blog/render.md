---
title: "render( )"
path: "render"
date: "2020-03-19"
draft: false
excerpt: This method is the only required method in a class component.
tags: null
---

[Link to docs](https://reactjs.org/docs/react-component.html#render)

It's the only required method in a class component.

When `render()` is called, it should examine `this.props` and `this.state` and return one of the following types:

- **React elements**: typically created via JSX, ie: `<div />` and `<MyComponent />` which are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
- **Arrays and fragments**: let you return multiple elements from render. [See documentation on fragments](https://reactjs.org/docs/fragments.html).
- **Portals**: let you render children into a different DOM subtree. [See documentation on portals](https://reactjs.org/docs/portals.html).
- **String and numbers**: these are rendered as text nodes in the DOM.
- **Booleans or null**: render nothing. It exists to support `return test && <Child />` pattern, where test is boolean.
