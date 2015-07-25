(function(){
  "use strict"
  Me.AttributesPage = React.createClass({

    propTypes: {
      attributes: React.PropTypes.array.isRequired
    },

    render: function() {
      return (
        <div>
          <div id="intro" className="main_row row center-text">
            <span>Hi, I'm John and I know …</span>
          </div>
          <Me.AttributeContainer attributes={this.props.attributes} />
        </div>
      );
    }

  });
})();