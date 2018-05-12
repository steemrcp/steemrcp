import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Navbar component */
class Nav extends Component {
    render() {
        return (

          <nav class="navbar navbar-inverse navbar-static-top">

            <div class="row">

              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-One-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a href="/" class="navbar-brand">
                  <img src="/img/logo_beta.png" class="img-responsive logo" alt="Steemrcp">
                </a>
              </div>

              <div class="collapse navbar-collapse" id = "bs-One-navbar-collapse-1">
                  <ul style="margin-right: 0px;" class="nav navbar-nav navbar-right">
                  </ul>
              </div>

            </div>

        </nav>
        );
    }
}

export default Nav;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('nav')) {
    ReactDOM.render(<Nav />, document.getElementById('nav'));
}
