---
title: "componentDidUpdate( )"
path: "componentdidupdate"
date: "2020-04-15"
draft: false
excerpt: Invoked immediately after updating occurs. Good place to operate on the DOM and/or do network requests as long as you compare the current props to previous ones.
tags: null
---

[Link to docs](https://reactjs.org/docs/react-component.html#componentdidupdate)

The `componentDidUpdate()` method is invoked immediately after updating occurs. This method is not called for the initial render.

Use this as an opportunity to operate on the DOM when the component has been updated.

This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).

You may call `setState()` immediately in `componentDidUpdate()` but note that it must be wrapped in a condition like in the example below(?), or you’ll cause an infinite loop.

```javascript
componentDidUpdate(prevProps) {
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

The `componentDidUpdate()` method will not be invoked if `shouldComponentUpdate()` returns false.

Another common use case scenario is UI update, where data changes and you need to re-arrange the page.
