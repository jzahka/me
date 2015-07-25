(function() {
  "use strict"

  Me.Voter = React.createClass({
    propTypes: {
      votes: React.PropTypes.number,
    },

    render: function() {
      return (
        <div className="center-text">
          <div>
            <span className="glyphicon glyphicon-chevron-up chev up" aria-hidden="true"></span>
          </div>
          <div>
            <div>{this.props.votes}</div>
          </div>
          <div>
            <span className="glyphicon glyphicon-chevron-down chev down" aria-hidden="true"></span>
          </div>
        </div>
      );
    }
  });

})();
