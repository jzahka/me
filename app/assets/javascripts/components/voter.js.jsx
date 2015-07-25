(function() {
  "use strict"

  Me.Voter = React.createClass({
    propTypes: {
      votes: React.PropTypes.number.isRequired,
      onUpVote: React.PropTypes.fun,
      onDownVote: React.PropTypes.fun
    },

    render: function() {
      return (
        <div id="voting_icon" className="center-text">
          <div>
            <span
              className="glyphicon glyphicon-chevron-up chev up"
              aria-hidden="true"
              onClick={this.props.onUpVote}
            />
          </div>
          <div>
            <div className="count">{this.props.votes}</div>
          </div>
          <div>
            <span
              className="glyphicon glyphicon-chevron-down chev down"
              aria-hidden="true"
              onClick={this.props.onDownVote}
            />
          </div>
        </div>
      );
    }
  });

})();
