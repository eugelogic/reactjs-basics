---
title: "Stateful Component"
path: "stateful-component"
date: "2020-02-15"
draft: false
excerpt: A stateful component is always a class component.
tags: null
---

import StatefulComponent from 'components/StatefulComponent'

```
class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "Initial State"
        }
    }

    updateState = () => {
        this.setState({
            value: "State Updated :-)"
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.value}</p>
                <button onClick={this.updateState}>Click Me</button>
            </div>
        )
    }
}
```

---

<StatefulComponent />
