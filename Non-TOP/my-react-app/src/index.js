import React from 'react';
import ReactDOM from 'react-dom/client';


const myFirstElement = <h1>Hello React!</h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);

// Component as a function

export const header = () => {
    return (
        <div>
            <h1>Awe ma se kinders!</h1>
        </div>
    )
}

// Component as a class

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>Hoe lyk it?</h2>
            </div>
        )
    }
}