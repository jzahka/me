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
            <Me.Voter votes={votes} />
          </div>
          <div className="col-md-4">
            <Me.TypedAttributes attributeNames={attributeNames} onUpdate={this.onUpdate} />
          </div>
        </div>
      );
    },

  });

})();
