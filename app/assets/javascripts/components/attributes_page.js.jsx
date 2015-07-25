(function(){
  "use strict"
  Me.AttributesPage = React.createClass({

    propTypes: {
      attributes: React.PropTypes.array.isRequired
    },

    render: function() {
      return (
        <Me.AttributeContainer attributes={this.props.attributes} />
      );
    }

  });
})();