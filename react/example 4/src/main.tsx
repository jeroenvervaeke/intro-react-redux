import * as React from 'react';
import { render } from 'react-dom';

interface CounterComponentProperties {
    Title : string
    Start : number
}

interface CounterComponentState {
    Count : number
}

class CounterComponent extends React.PureComponent<CounterComponentProperties, CounterComponentState> {
    componentWillMount() {
        this.setState({ Count: this.props.Start });
    }

    render() {
        return <div>
                    <h1>{this.props.Title}</h1>
                    <div>Current count: {this.state.Count}</div>
                    <div>
                        <button onClick={this.countUp}>Count</button>
                    </div>
                </div>
    }

    countUp = () => {
        this.setState((previousState) => {
            return { ...previousState, Count : previousState.Count + 1 };
        });
    }
}

var output = <div>
                <CounterComponent Title="Counter 1" Start={0} />
                <hr />
                <CounterComponent Title="Counter 2" Start={10} />
             </div>;

render(output, document.getElementById('app'));