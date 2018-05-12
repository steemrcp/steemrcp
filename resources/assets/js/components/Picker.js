import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Picker component */
class Picker extends Component {
    render() {
        return (

          <section class="picker-section">

                <h1 class="picker-h1 text-center">STEEMRCP</h1>

                <form class="form-group" action="" method="post">

                    <div class="col-md-2">

                    </div>

                    <div class="col-md-8">

                        <h3 class="picker-h3 text-center">Steem Random Comment Picker (Steemrcp) randomly picks comment(s) from a post on the steem blockchain</h3>

                        <div class="input-group">
                          <span class="input-group-addon" id="basic-addon3">Enter Post URL</span>
                          <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
                          <span class="input-group-btn">
                            <button class="btn btn-default" type="button">Go!</button>
                          </span>
                        </div>

                    </div>

                    <div class="col-md-2">

                    </div>

                </form>

          </section>

        );
    }
}

export default Picker;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "picker";
*/

if (document.getElementById('picker')) {
    ReactDOM.render(<Picker />, document.getElementById('picker'));
}
