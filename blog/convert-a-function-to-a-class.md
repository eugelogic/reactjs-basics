---
title: "Convert a Function to a Class"
path: "convert-a-function-to-a-class"
date: "2020-02-07"
draft: false
excerpt: In order to get the most out of state and the lifecycle methods, you need to convert a function to a class.
tags: null
---

[Link to docs](https://reactjs.org/docs/state-and-lifecycle.html#converting-a-function-to-a-class)

You can convert a function component to a class in five steps:

1. Create an [ES6 class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes), with the same name, that extends React.Component

2. Add a single empty method to it called `render()`

3. Move the body of the function into the `render()` method

4. Replace props with this.props in the `render()` body

5. Delete the remaining empty function declaration

Before

```
function Clock(props) {
    return (
        <div>
            <h1>Hello World!</h1>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </div>
    );
}
```

After

```
class Clock extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {props.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}
```
