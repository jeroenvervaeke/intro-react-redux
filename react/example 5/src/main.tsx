import * as React from 'react';
import { render } from 'react-dom';

// Data
interface Person {
    Id: number,
    FirstName: string,
    LastName: string
}

var people : Person[] = [
    { Id: 1, FirstName: 'John', LastName: 'Doe' },
    { Id: 2,FirstName: 'Jane', LastName: 'Doe' }
];

// Person component
interface PersonComponentProps {
    firstName: string,
    lastName: string
}

const PersonComponent = ({ firstName, lastName } : PersonComponentProps) => <div>{lastName} {firstName}</div>;

// People list component
interface PeopleListProps {
    people: Person[]
}

const PeopleListComponent = ({ people } : PeopleListProps) => <div>
    {people.map(p => <PersonComponent key={p.Id} firstName={p.FirstName} lastName={p.LastName} />)}
</div>;


render(<PeopleListComponent people={people} />, document.getElementById('app'));