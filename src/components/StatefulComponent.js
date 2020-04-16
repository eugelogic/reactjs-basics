import React from 'react'

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

export default StatefulComponent