(function() {
  "use strict"

  Me.VoteSign = React.createClass({

    propTypes: {
      direction: React.PropTypes.string.isRequired
    },

    render: function() {
      var sign;
      switch (this.props.direction) {
        case "up":
          sign = <span className="glyphicon glyphicon-plus" />;
          break;
        case "down":
          sign = <span className="glyphicon glyphicon-minus" />;
          break;
      }
      return (
        <ReactCSSTransitionGroup
          transitionName="voter-transition"
          transitionAppear={true}
        >
          <div id="voting_sign" className="center-text">
            {sign}
          </div>
        </ReactCSSTransitionGroup>
      );
    },

  });

})();
