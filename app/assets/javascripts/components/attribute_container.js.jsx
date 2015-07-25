(function(){
  "use strict"

  Me.AttributeContainer = React.createClass({

    getInitialState: function() {
      return {
        currentIndex: 0,
        attributes: []
      };
    },

    onUpdate: function(pos) {
      this.setState({currentIndex: pos});
    },

    componentDidMount: function() {
      this._getAttributes();
      setInterval(this._getAttributes, 30000);
    },

    render: function() {
      var attributeNames = _.map(this.state.attributes, "name");
      var votes = _.map(this.state.attributes, "net_votes")[this.state.currentIndex];
      return (
        <div id='vote_row' className="main-row row">
          <div className="col-md-3"></div>
          <div id="voting" className="col-md-1">
            <Me.VoterContainer
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
            <Me.Suggest
              onSubmit={this._handleSuggestion}
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

    _handleSuggestion: function(suggested_attribute) {
      $.ajax('/attributes/',
        {
          method: "POST",
          data: {attribute: {name: suggested_attribute}}
        }
      );
    },

    _getAttributes: function() {
      var that = this;
      $.getJSON('/attributes/', {},
        function(data) {
          that.setState({attributes: data});
        }
      )
    },

    _currentAttribute: function() {
      return this.props.attributes[this.state.currentIndex]
    }

  });

})();
