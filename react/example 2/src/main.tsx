import * as React from 'react';
import { render } from 'react-dom';

var HelloWorldComponent = () => <div>Hello world!</div>;

var output = <HelloWorldComponent />;

render(output, document.getElementById('app'));