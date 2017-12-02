import * as React from 'react';
import { render } from 'react-dom';

interface HelloComponentProperties {
    Name : string
}


var HelloWorldComponent = (props: HelloComponentProperties) => <div>Hello {props.Name}!</div>;

var output = <div>
                <HelloWorldComponent Name="John Doe" />
                <HelloWorldComponent Name="Jane Doe" />
             </div>;

render(output, document.getElementById('app'));