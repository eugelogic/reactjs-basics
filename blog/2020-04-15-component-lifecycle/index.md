---
title: "Component Lifecycle"
path: "component-lifecycle"
date: "2020-04-15"
draft: false
excerpt: Set of hooks for when certain events take place. Hooks are just functions we might call to manipulate the flow of data within a component.
tags: null
---

[Link to docs](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

Each component has several “lifecycle methods” that you can override to run code at particular times in the process.

You can use this [lifecycle diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) as a cheat sheet.

## Component Lifecycle main stages:

- mounting
- updating
- unmounting
- error handling

The most popular methods are highlighted below.

## Mounting

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

- `constructor()`
- static getDerivedStateFromProps()
- `render()`
- `componentDidMount()`

## Updating

An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered:

- static getDerivedStateFromProps()
- shouldComponentUpdate()
- `render()`
- getSnapshotBeforeUpdate()
- `componentDidUpdate()`

## Unmounting

This method is called when a component is being removed from the DOM:

- `componentWillUnmount()`

## Error Handling

These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component.

- static getDerivedStateFromError()
- componentDidCatch()
