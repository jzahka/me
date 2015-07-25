(function() {
  "use strict"

  Me.VoterContainer = React.createClass({
    propTypes: {
      votes: React.PropTypes.number.isRequired,
      onUpVote: React.PropTypes.func,
      onDownVote: React.PropTypes.func
    },

    getInitialState: function() {
      return {
        justVoted: null
      };
    },

    componentWillReceiveProps: function(nextProps) {
      this.setState({justVoted: null});
    },

    render: function() {
      var renderVoter;
      if (this.state.justVoted) {
        renderVoter = (
          <Me.VoteSign
            direction={this.state.justVoted}
          />
        )
      } else {
        renderVoter = (
          <Me.Voter
            votes={this.props.votes}
            onUpVote={this._handleUpVote}
            onDownVote={this._handleDownVote}
          />
        )
      }
      return (renderVoter);
    },

    _handleUpVote: function() {
      this.setState({justVoted: "up"});
      this.props.onUpVote();
    },

    _handleDownVote: function() {
      this.setState({justVoted: "down"});
      this.props.onDownVote();
    }
  });

})();
