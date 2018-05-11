import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('header')) {
    ReactDOM.render(<Header />, document.getElementById('header'));
}
