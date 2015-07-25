(function(){
  "use strict"

  Me.AttributeContainer = React.createClass({

    propTypes: {
      attributes: React.PropTypes.array.isRequired
    },

    getInitialState: function() {
      return {
        currentIndex: 0,
      };
    },

    onUpdate: function(pos) {
      this.setState({currentIndex: pos});
    },

    render: function() {
      var attributeNames = _.map(this.props.attributes, "name");
      var votes = _.map(this.props.attributes, "net_votes")[this.state.currentIndex];
      return (
        <div id='vote_row' className="main-row row">
          <div className="col-md-3"></div>
          <div id="voting" className="col-md-1">
            <Me.Voter
              votes={votes}
              onUpVote={this.handleUpVote}
              onDownVote={this.handleDownVote}
            />
          </div>
          <div className="col-md-4">
            <Me.TypedAttributes
              attributeNames={attributeNames}
              onUpdate={this.onUpdate}
            />
          </div>
        </div>
      );
    },

    handleUpVote: function() {
      this._vote("up");
    },

    handleDownVote: function() {
      this._vote("down");
    },

    _vote: function(direction) {
      $.ajax('/attributes/' + this._currentAttribute().id,
        {
          method: "PUT",
          data: { vote: direction }
        }
      );
    },

    _currentAttribute: function() {
      return this.props.attributes[this.state.currentIndex]
    }

  });

})();