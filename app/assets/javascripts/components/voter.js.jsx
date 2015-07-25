(function() {
  "use strict"

  Me.Voter = React.createClass({
    propTypes: {
      votes: React.PropTypes.number.isRequired,
      onUpVote: React.PropTypes.func,
      onDownVote: React.PropTypes.func
    },

    render: function() {
      return (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
        >
          <div id="voting_icon" className="center-text">
            <div>
              <span
                className="glyphicon glyphicon-chevron-up chev up"
                aria-hidden="true"
                onClick={this._handleUpVote}
              />
            </div>
            <div>
              <div className="count">{this.props.votes}</div>
            </div>
            <div>
              <span
                className="glyphicon glyphicon-chevron-down chev down"
                aria-hidden="true"
                onClick={this._handleDownVote}
              />
            </div>
          </div>
        </ReactCSSTransitionGroup>
      );
    },

    _handleUpVote: function() {
      this.props.onUpVote();
    },

    _handleDownVote: function() {
      this.props.onDownVote();
    }
  });

})();
