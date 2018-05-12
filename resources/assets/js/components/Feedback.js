import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/* Feedback component */
class Feedback extends Component {
    render() {
        return (

          <section class="feedback-section">

              <div class="col-md-1">

              </div>

              <div class="col-md-3 feedback-block">

                  <h5 class="feedback-label">Upvotes</h5>
                  <i class="fa fa-thumbs-up pull-right"></i>
                  <h4 class="text-center">0</h4>

              </div>

              <div class="col-md-3 feedback-block">

                  <h5 class="feedback-label">Downvotes</h5>
                  <i class="fa fa-thumbs-down pull-right"></i>
                  <h4 class="text-center">0</h4>

              </div>


              <div class="col-md-3 feedback-block">

                  <h5 class="feedback-label">Comments</h5>
                  <i class="fa fa-comments-o pull-right"></i>
                  <h4 class="text-center">0</h4>

              </div>


          </section>


        );
    }
}

export default Feedback;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "feedback";
*/

if (document.getElementById('feedback')) {
    ReactDOM.render(<Feedback />, document.getElementById('feedback'));
}
