(function() {
  "use strict"

  Me.Voter = React.createClass({
    propTypes: {
      votes: React.PropTypes.number,
      onUpVote: React.PropTypes.func,
      onDownVote: React.PropTypes.func
    },

    render: function() {
      return (
        <ReactCSSTransitionGroup
          transitionName="voter-transition"
          transitionAppear={true}
        >
          <div id="voting_icon" className="center-text">
            <div>
              <span
                className="glyphicon glyphicon-chevron-up chev up"
                aria-hidden="true"
                onClick={this._handleUpVote}
                onTouchEnd={this._handleUpVote}
              />
            </div>
            <div>
              <div className="count">{this.props.votes || 0}</div>
            </div>
            <div>
              <span
                className="glyphicon glyphicon-chevron-down chev down"
                aria-hidden="true"
                onClick={this._handleDownVote}
                onTouchEnd={this._handleDownVote}
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
