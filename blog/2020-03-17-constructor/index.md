---
title: "constructor( )"
path: "constructor"
date: "2020-03-17"
draft: false
excerpt: If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
tags: null
---

[Link to docs](https://reactjs.org/docs/react-component.html#constructor)

The `constructor()` for a React component is called before it is mounted.

When implementing the `constructor()` for a `React.Component` subclass, you should call `super(props)` before any other statement. Otherwise, `this.props` will be undefined in the `constructor()`, which can lead to bugs.

Typically, in React constructors are only used for two purposes:

- Initializing [local state](https://reactjs.org/docs/state-and-lifecycle.html#adding-local-state-to-a-class) by assigning an object to `this.state`.
- Binding [event handler](https://reactjs.org/docs/handling-events.html) methods to an instance.

You should NOT call `setState()` in the `constructor()`. Instead, if your component needs to use local state, assign the initial state to `this.state` directly in the `constructor()`

```
constructor(props) {
  super(props);
  this.state = { counter: 0 };
  this.handleClick = this.handleClick.bind(this);
}
```
