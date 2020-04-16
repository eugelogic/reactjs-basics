---
title: "shouldComponentUpdate( )"
path: "shouldcomponentupdate"
date: "2020-03-23"
draft: false
excerpt: Rarely used method, for performance optimisation only. Let React know if a component’s output is NOT affected by the current change in state or props.
tags: null
---

import SCU from 'components/SCU'

[Link to docs](https://reactjs.org/docs/react-component.html#shouldcomponentupdate)

The `shouldComponentUpdate()` method ONLY exists for performance optimisation.

Use `shouldComponentUpdate()` to let React know if a component’s output is NOT affected by the current change in state or props.

The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior. `should ComponentUpdate()` defaults to `true`.

`shouldComponentUpdate()` is invoked before rendering when new props or state are being received.

You may compare `this.props` with `nextProps` and `this.state` with `nextState` and return `false` to tell React the update can be skipped.

Note that returning `false` does NOT prevent child components from re-rendering when their state changes.

## Example

The best way to demonstrate how `shouldComponentUpdate()` works is by having a barchart that icrements every time you add 5 points to it rather than every single point

```
shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.points % 5) {
      return false;
    } else {
      return true;
    }
  }
  render() { ...
```

---

<SCU />

---

## Other Scenarios

- [React shouldComponentUpdate demystified](https://www.freecodecamp.org/news/react-shouldcomponentupdate-demystified-c5d323099ef6/) with [GitHub demo](https://github.com/jpdelima/react-should-component-update-demystified)
