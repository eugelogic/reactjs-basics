---
title: "componentDidMount( )"
path: "componentdidmount"
date: "2020-04-15"
draft: false
excerpt: Invoked immediately after a component is mounted. This is a good place to set up a timer or fetch some data from an API.
tags: null
---

import CDM from 'components/CDM'

[Link to docs](https://reactjs.org/docs/react-component.html#componentdidmount)

The `componentDidMount()` method is invoked immediately after a component is mounted (inserted into the tree).

This method is a good place to set up any subscriptions. If you do that, don’t forget to unsubscribe in `componentWillUnmount()`.

You may call `setState()` immediately in `componentDidMount()`. It will trigger an extra rendering, but it will happen before the browser updates the screen. This can be necessary for cases like modals and tooltips when you need to measure a DOM node before rendering something that depends on its size or position.

## Example

Initialization that requires DOM nodes should go in the `componentDidMount()` method. If you need to load data from a remote endpoint(ie `fetch()`), this is a good place to instantiate the network request.

Ideally you want to make sure something basic is rendered on the page first before you fetch the data you want to display, that's why the `fetch()` function is not included in the initialisation of state but added to `componentDidMount`.

If you refresh the page you will notice the component renders a "Default Post" before returning the actual list.

```
componentDidMount() {
	fetch("https://gatsbypress.website/wp-json/wp/v2/posts")
	  .then(response => response.json())
	  .then(posts => {
	    this.setState({ posts: posts });
	  })
	  .catch(error => console.error(error));
	}

	render() {
		return ( ...
```

---

<CDM />

---

## Other Scenarios

- connect a React app to external applications, such as web APIs or JavaScript frameworks
- set timers using using `setTimeout()` or `setInterval()`
- add event listeners
- draw on an element you just rendered
