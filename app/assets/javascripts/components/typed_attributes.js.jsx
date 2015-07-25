(function() {
  "use strict"

  Me.TypedAttributes = React.createClass({
    propTypes: {
      attributeNames: React.PropTypes.array.isRequired,
      onUpdate: React.PropTypes.func.isRequired
    },

    componentDidMount: function() {
      $(".attribute").typed({
        strings: this.props.attributeNames,
        typeSpeed: 20,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        preStringTyped: this.props.onUpdate
      });
    },

    render: function() {
      return (
        <div id="typed" className="center-text">
          <span className="attribute"></span>
        </div>
      );

    }
  });

})();