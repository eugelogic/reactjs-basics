---
title: "componentWillUnmount"
path: "componentwillunmount"
date: "2020-04-15"
draft: false
excerpt: Called when a component is being removed from the DOM. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions
tags: null
---

import CWU from 'components/CWU'

[Link to docs](https://reactjs.org/docs/react-component.html#componentwillunmount)

The `componentWillUnmount()` method is called when a component is being removed from the DOM.

Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in `componentDidMount()`.

Don't call `setState()` in `componentWillUnmount()` because the component will never be re-rendered.

## Example

The component below has a timer. Every 300ms it increments the bar chart and when it reaches the goal it stops. It stops only because we added a `stopTimer()` function to the `componentWillUnmount()` hook.

If you try to edit the component and remove the `stopTime()` function you will see the timer continuing after the goal was reached.

```
componentWillUnmount() {
    this.props.stopTimer();
  }

  render() { ...
```

---

<CWU />

---

## Other Scenarios

- remove a click event listener
- clean up any elements created by a third party library
- remove a chart
- clean up bootstrap modals after opening
