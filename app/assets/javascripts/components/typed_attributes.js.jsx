(function() {
  "use strict"

  Me.TypedAttributes = React.createClass({
    propTypes: {
      attributeNames: React.PropTypes.array.isRequired,
      onUpdate: React.PropTypes.func.isRequired
    },

    componentDidMount: function() {
      this._setTyped(this.props.attributeNames);
    },

    componentWillReceiveProps: function(nextProps) {
      if (!_.eq(this.props.attributeNames, nextProps.attributeNames)) {
        $(".attribute").typed('reset');
        this._setTyped(nextProps.attributeNames);
      }
    },

    render: function() {
      return (
        <div id="typed" className="center-text">
          <span className="attribute"></span>
        </div>
      );

    },

    _setTyped: function(attributeNames) {
      var attributeClone = $(".attribute").clone();
      $(".attribute").typed({
        strings: attributeNames,
        typeSpeed: 20,
        backDelay: 2000,
        startDelay: 1000,
        loop: true,
        preStringTyped: this.props.onUpdate,
        resetCallback: function() { $("#typed").append(attributeClone); }
      });
    }
  });

})();